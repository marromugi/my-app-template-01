import { describe, it, expect } from 'vitest';
import { User, NewUser } from '../User';
import { Name } from '../../valueObject/Name';
import { Email } from '../../valueObject/Email';
import { Password } from '../../valueObject/Password';

describe('User Entity', () => {
  describe('create', () => {
    it('should create a new user successfully', async () => {
      const name = Name.create('John Doe');
      const email = Email.create('john@example.com');

      const user = User.create({
        name,
        email
      });

      expect(user.getUserId()).toBeDefined();
      expect(user.getName().equals(name)).toBe(true);
      expect(user.getEmail().equals(email)).toBe(true);
      expect(user.getCreatedAt()).toBeInstanceOf(Date);
      expect(user.getLastLoginAt()).toBeNull();
    });
  });

  describe('NewUser', () => {
    it('should create a new user with password successfully', async () => {
      const name = Name.create('John Doe');
      const email = Email.create('john@example.com');
      const password = await Password.create('Password123!');

      const newUser = NewUser.create({
        name,
        email,
        password
      });

      expect(newUser.getUserId()).toBeDefined();
      expect(newUser.getName().equals(name)).toBe(true);
      expect(newUser.getEmail().equals(email)).toBe(true);
      expect(newUser.getPassword()).toBeDefined();
      expect(newUser.getCreatedAt()).toBeInstanceOf(Date);
      expect(newUser.getLastLoginAt()).toBeNull();
    });

    it('should convert to User successfully', async () => {
      const name = Name.create('John Doe');
      const email = Email.create('john@example.com');
      const password = await Password.create('Password123!');

      const newUser = NewUser.create({
        name,
        email,
        password
      });

      const user = newUser.toUser();

      expect(user.getUserId()).toBe(newUser.getUserId());
      expect(user.getName().equals(newUser.getName())).toBe(true);
      expect(user.getEmail().equals(newUser.getEmail())).toBe(true);
      expect(user.getCreatedAt()).toBe(newUser.getCreatedAt());
      expect(user.getLastLoginAt()).toBe(newUser.getLastLoginAt());
      // パスワードにアクセスできないことを確認
      expect((user as any).password).toBeUndefined();
    });
  });

  describe('reconstruct', () => {
    it('should reconstruct user from persistence', () => {
      const userId = '123';
      const name = Name.create('John Doe');
      const email = Email.create('john@example.com');
      const createdAt = new Date();
      const lastLoginAt = new Date();

      const user = User.reconstruct({
        userId,
        name,
        email,
        createdAt,
        lastLoginAt
      });

      expect(user.getUserId()).toBe(userId);
      expect(user.getName().equals(name)).toBe(true);
      expect(user.getEmail().equals(email)).toBe(true);
      expect(user.getCreatedAt()).toBe(createdAt);
      expect(user.getLastLoginAt()).toBe(lastLoginAt);
    });
  });
}); 