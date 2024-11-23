import { AppError } from '../../../shared/error/AppError';

export class UserNotFoundError extends AppError {
  constructor(userId: string) {
    super(`User with id ${userId} not found`, 404, 'USER_NOT_FOUND');
  }
} 