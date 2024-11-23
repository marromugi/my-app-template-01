export class Email {
  private constructor(private readonly value: string) {
    this.validate();
  }

  public static create(value: string): Email {
    return new Email(Email.normalize(value));
  }

  private validate(): void {
    if (!this.value) {
      throw new Error('Invalid email format');
    }

    const [localPart, domain] = this.value.split('@');

    if (!localPart || !domain) {
      throw new Error('Invalid email format');
    }

    if (
      localPart.startsWith('.') || 
      localPart.endsWith('.') || 
      localPart.includes('..') ||
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+$/.test(localPart)
    ) {
      throw new Error('Invalid email format');
    }

    if (
      !domain.includes('.') ||
      domain.startsWith('.') || 
      domain.endsWith('.') || 
      domain.includes('..') ||
      !/^[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/.test(domain)
    ) {
      throw new Error('Invalid email format');
    }
  }

  private static normalize(email: string): string {
    return email.trim().toLowerCase();
  }

  public getValue(): string {
    return this.value;
  }

  public equals(other: Email): boolean {
    return this.value === other.value;
  }
} 