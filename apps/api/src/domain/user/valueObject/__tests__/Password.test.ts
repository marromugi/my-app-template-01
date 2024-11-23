import { describe, it, expect } from 'vitest';
import { Password } from '../Password';

describe('Password', () => {
  describe('create', () => {
    it('should create a password with valid input', async () => {
      const validPassword = 'ValidPass123!';
      const password = await Password.create(validPassword);
      expect(password).toBeTruthy();
    });

    it('should throw error for short password', async () => {
      const shortPassword = 'Short1!';
      await expect(Password.create(shortPassword)).rejects.toThrow('Password must be at least 8 characters long');
    });

    it('should throw error for password with spaces', async () => {
      const passwordWithSpaces = 'Invalid Pass 123!';
      await expect(Password.create(passwordWithSpaces)).rejects.toThrow('Password cannot contain spaces');
    });

    it('should throw error for password without uppercase', async () => {
      const passwordWithoutUppercase = 'validpass123!';
      await expect(Password.create(passwordWithoutUppercase)).rejects.toThrow('Password must contain uppercase, lowercase, number and special character');
    });

    it('should throw error for password without lowercase', async () => {
      const passwordWithoutLowercase = 'VALIDPASS123!';
      await expect(Password.create(passwordWithoutLowercase)).rejects.toThrow('Password must contain uppercase, lowercase, number and special character');
    });

    it('should throw error for password without numbers', async () => {
      const passwordWithoutNumbers = 'ValidPass!';
      await expect(Password.create(passwordWithoutNumbers)).rejects.toThrow('Password must contain uppercase, lowercase, number and special character');
    });

    it('should throw error for password without special characters', async () => {
      const passwordWithoutSpecialChar = 'ValidPass123';
      await expect(Password.create(passwordWithoutSpecialChar)).rejects.toThrow('Password must contain uppercase, lowercase, number and special character');
    });
  });

  describe('verifyRawPassword', () => {
    it('should return true for correct raw password', async () => {
      const rawPassword = 'ValidPass123!';
      const password = await Password.create(rawPassword);
      const isValid = await password.verifyRawPassword(rawPassword);
      expect(isValid).toBe(true);
    });

    it('should return false for incorrect raw password', async () => {
      const originalPassword = 'ValidPass123!';
      const incorrectPassword = 'WrongPass456@';
      const password = await Password.create(originalPassword);
      const isValid = await password.verifyRawPassword(incorrectPassword);
      expect(isValid).toBe(false);
    });
  });

  describe('verifyHashedPassword', () => {
    it('should return true for matching hashed password', async () => {
      const rawPassword = 'ValidPass123!';
      const password = await Password.create(rawPassword);
      const isValid = password.verifyHashedPassword(password.getHashedValue());
      expect(isValid).toBe(true);
    });

    it('should return false for non-matching hashed password', async () => {
      const originalPassword = 'ValidPass123!';
      const differentPassword = 'WrongPass456@';
      const password = await Password.create(originalPassword);
      const differentHashedPassword = await Password.create(differentPassword);
      const isValid = password.verifyHashedPassword(differentHashedPassword.getHashedValue());
      expect(isValid).toBe(false);
    });
  });

  describe('getHashedValue', () => {
    it('should return a non-empty hashed value', async () => {
      const rawPassword = 'ValidPass123!';
      const password = await Password.create(rawPassword);
      const hashedValue = password.getHashedValue();
      expect(hashedValue).toBeTruthy();
      expect(hashedValue.length).toBeGreaterThan(0);
    });
  });
}); 