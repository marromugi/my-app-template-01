export class Password {
  private constructor(private readonly hashedValue: string) {}

  public static async create(plainPassword: string): Promise<Password> {
    Password.validate(plainPassword);
    const hashedValue = await Password.hash(plainPassword);
    return new Password(hashedValue);
  }

  private static validate(password: string): void {
    if (!password || password.length < 8) {
      throw new Error('Password must be at least 8 characters long');
    }

    if (password.includes(' ')) {
      throw new Error('Password cannot contain spaces');
    }

    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>_-]/.test(password);

    if (!hasUpperCase || !hasLowerCase || !hasNumbers || !hasSpecialChar) {
      throw new Error('Password must contain uppercase, lowercase, number and special character');
    }
  }

  private static async hash(plainPassword: string): Promise<string> {
    const encoder = new TextEncoder();
    const data = encoder.encode(plainPassword);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }

  public async verifyRawPassword(rawPassword: string): Promise<boolean> {
    const hashedInput = await Password.hash(rawPassword);
    return this.hashedValue === hashedInput;
  }

  public verifyHashedPassword(hashedPassword: string): boolean {
    return this.hashedValue === hashedPassword;
  }

  public getHashedValue(): string {
    return this.hashedValue;
  }
} 