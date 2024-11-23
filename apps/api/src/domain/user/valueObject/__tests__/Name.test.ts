import { describe, it, expect } from 'vitest';
import { Name } from '../Name';

describe('Name', () => {
  describe('create', () => {
    it('should create a valid name', () => {
      const validNames = [
        'John Doe',
        '山田 太郎',
        'María García',
        'Jean-Pierre',
        'O\'Connor',
        'Smith Jr.',
        'Dr. Jones'
      ];

      validNames.forEach(name => {
        const nameVO = Name.create(name);
        expect(nameVO.getValue()).toBe(name);
      });
    });

    it('should throw error for empty name', () => {
      const invalidNames = ['', ' ', '   '];

      invalidNames.forEach(name => {
        expect(() => Name.create(name))
          .toThrow('Name must be between 1 and 50 characters');
      });
    });

    it('should throw error for too long name', () => {
      const longName = 'a'.repeat(51);
      expect(() => Name.create(longName))
        .toThrow('Name must be between 1 and 50 characters');
    });
  });

  describe('equals', () => {
    it('should return true for same values', () => {
      const name1 = Name.create('John Doe');
      const name2 = Name.create('John Doe');
      expect(name1.equals(name2)).toBe(true);
    });

    it('should return false for different values', () => {
      const name1 = Name.create('John Doe');
      const name2 = Name.create('Jane Doe');
      expect(name1.equals(name2)).toBe(false);
    });
  });

  describe('getValue', () => {
    it('should return the original value', () => {
      const value = 'John Doe';
      const name = Name.create(value);
      expect(name.getValue()).toBe(value);
    });
  });
}); 