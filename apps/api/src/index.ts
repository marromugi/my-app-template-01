import { createHonoClient } from './shared/factories/hono'

// Routes
import { auth } from './middleware/auth'
import { logger } from './middleware/logger'
import { cors } from './middleware/cors'
import bearerToken from './middleware/bearerToken'
import { AppError, AppErrorSchema } from './shared/error/AppError'

const app = createHonoClient()
  .basePath('/api')
  .route('*', logger)
  .route('*', cors)
  // set unauthorized routes
  .route('*', bearerToken)
  .route('*', auth)
  // set authorized routes
  .onError((err, c) => {
    if (err instanceof AppError) {
      console.error(err)
      return c.json(
        {
          message: err.message,
          name: err.name,
          code: err.code,
          cause: err.cause,
          stack: err.stack
        },
        err.statusCode
      )
    }
    return c.json({ error: 'Internal Server Error' }, 500)
  })

export type AppType = typeof app

export default app
export { app, AppError, AppErrorSchema }
