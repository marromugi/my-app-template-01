export class Name {
  private constructor(
    private readonly value: string
  ) {
    this.validate();
  }

  public static create(value: string): Name {
    return new Name(value);
  }

  private validate(): void {
    if (!this.value || this.value.trim().length === 0) {
      throw new Error('Name must be between 1 and 50 characters');
    }
    if (this.value.length > 50) {
      throw new Error('Name must be between 1 and 50 characters');
    }
  }

  public getValue(): string {
    return this.value;
  }

  public equals(other: Name): boolean {
    return this.value === other.value;
  }
} 