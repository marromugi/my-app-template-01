import { StatusCode } from 'hono/utils/http-status'
import { z } from 'zod'

export class AppError extends Error {
  constructor(
    public readonly message: string,
    public readonly statusCode: StatusCode,
    public readonly code: string
  ) {
    super(message)
    this.name = this.constructor.name
    Error.captureStackTrace(this, this.constructor)
  }
}

export const AppErrorSchema = z.object({
  message: z.string(),
  name: z.string(),
  code: z.string(),
  cause: z.any(),
  stack: z.any()
})
