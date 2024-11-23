import { AppError } from '../../../shared/error/AppError';

export class InvalidCredentialsError extends AppError {
  constructor() {
    super('Invalid email or password', 401, 'INVALID_CREDENTIALS');
  }
} 