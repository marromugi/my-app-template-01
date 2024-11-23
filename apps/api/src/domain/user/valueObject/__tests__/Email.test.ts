import { describe, it, expect } from 'vitest';
import { Email } from '../Email';

describe('Email', () => {
  describe('create', () => {
    it('should create a valid email', () => {
      const validEmails = [
        'test@example.com',
        'user.name@domain.com',
        'user+tag@example.com',
        'user@subdomain.domain.com',
        'user123@domain.com',
        'user@domain-name.com',
        'user@domain.co.jp',
        'user.name+tag@domain.co.uk',
        ' user@domain.com '
      ];

      validEmails.forEach(email => {
        const emailVO = Email.create(email);
        expect(emailVO.getValue()).toBe(email.trim().toLowerCase());
      });
    });

    it('should throw error for invalid email format', () => {
      const invalidEmails = [
        '',
        'invalid',
        '@domain.com',
        'user@',
        'user@domain',
        'user.domain.com',
        'user@.com',
        'user@domain..com',
        'user@domain',        // TLDなし
        'user@domain.',
        'user@.domain.com',
        '.user@domain.com',
        'user.@domain.com',
        'user..name@domain.com',
        'user@domain_name.com',
        'user@-domain.com',
        'user@domain-.com'
      ];

      invalidEmails.forEach(email => {
        expect(() => Email.create(email))
          .toThrow('Invalid email format');
      });
    });

    it('should normalize email addresses', () => {
      const testCases = [
        {
          input: ' Test@Example.COM ',
          expected: 'test@example.com'
        },
        {
          input: 'USER@Domain.COM',
          expected: 'user@domain.com'
        },
        {
          input: '  user@domain.com  ',
          expected: 'user@domain.com'
        }
      ];

      testCases.forEach(({ input, expected }) => {
        const emailVO = Email.create(input);
        expect(emailVO.getValue()).toBe(expected);
      });
    });
  });

  describe('equals', () => {
    it('should return true for same values', () => {
      const email1 = Email.create('test@example.com');
      const email2 = Email.create('test@example.com');
      expect(email1.equals(email2)).toBe(true);
    });

    it('should return false for different values', () => {
      const email1 = Email.create('test1@example.com');
      const email2 = Email.create('test2@example.com');
      expect(email1.equals(email2)).toBe(false);
    });

    it('should be case-insensitive and trim spaces', () => {
      const testCases = [
        {
          email1: 'TEST@example.com',
          email2: 'test@example.com',
          expected: true
        },
        {
          email1: ' test@example.com ',
          email2: 'test@example.com',
          expected: true
        },
        {
          email1: 'TEST@EXAMPLE.COM ',
          email2: 'test@example.com',
          expected: true
        }
      ];

      testCases.forEach(({ email1, email2, expected }) => {
        const emailVO1 = Email.create(email1);
        const emailVO2 = Email.create(email2);
        expect(emailVO1.equals(emailVO2)).toBe(expected);
      });
    });
  });

  describe('getValue', () => {
    it('should return normalized email', () => {
      const testCases = [
        {
          input: 'TEST@EXAMPLE.COM',
          expected: 'test@example.com'
        },
        {
          input: ' user@domain.com ',
          expected: 'user@domain.com'
        },
        {
          input: 'User.Name@Domain.Com',
          expected: 'user.name@domain.com'
        }
      ];

      testCases.forEach(({ input, expected }) => {
        const email = Email.create(input);
        expect(email.getValue()).toBe(expected);
      });
    });
  });
}); 