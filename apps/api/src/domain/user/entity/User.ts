import { Name } from '../valueObject/Name'
import { Email } from '../valueObject/Email'
import { Password } from '../valueObject/Password'
import { randomUUID } from 'node:crypto'
interface CreateUserParams {
  name: Name
  email: Email
}

interface CreateUserWithPasswordParams extends CreateUserParams {
  password: Password
}

interface ReconstructUserParams {
  userId: string
  name: Name
  email: Email
  createdAt: Date
  lastLoginAt: Date | null
}

export class User {
  protected constructor(
    protected readonly userId: string,
    protected readonly name: Name,
    protected readonly email: Email,
    protected readonly createdAt: Date,
    protected lastLoginAt: Date | null
  ) {}

  public static create(params: CreateUserParams): User {
    const userId = User.generateId()
    const now = new Date()

    return new User(userId, params.name, params.email, now, null)
  }

  public static reconstruct(params: ReconstructUserParams): User {
    return new User(
      params.userId,
      params.name,
      params.email,
      params.createdAt,
      params.lastLoginAt
    )
  }

  protected static generateId(): string {
    return randomUUID()
  }

  public updateLastLogin(): void {
    this.lastLoginAt = new Date()
  }

  public getUserId(): string {
    return this.userId
  }

  public getName(): Name {
    return this.name
  }

  public getEmail(): Email {
    return this.email
  }

  public getCreatedAt(): Date {
    return this.createdAt
  }

  public getLastLoginAt(): Date | null {
    return this.lastLoginAt
  }
}

export class NewUser extends User {
  private readonly password: Password

  private constructor(
    userId: string,
    name: Name,
    email: Email,
    password: Password,
    createdAt: Date,
    lastLoginAt: Date | null
  ) {
    super(userId, name, email, createdAt, lastLoginAt)
    this.password = password
  }

  public static create(params: CreateUserWithPasswordParams): NewUser {
    const userId = User.generateId()
    const now = new Date()

    return new NewUser(
      userId,
      params.name,
      params.email,
      params.password,
      now,
      null
    )
  }

  public getPassword(): Password {
    return this.password
  }

  public toUser(): User {
    return User.reconstruct({
      userId: this.userId,
      name: this.name,
      email: this.email,
      createdAt: this.createdAt,
      lastLoginAt: this.lastLoginAt
    })
  }
}
