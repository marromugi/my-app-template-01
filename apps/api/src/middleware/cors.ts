import { cors as BaseCors } from 'hono/cors'
import { createHonoClient } from '../shared/factories/hono'

export const cors = createHonoClient().use('/', (c, next) => {
  const corsMiddlewareHandler = BaseCors({
    origin: c.env.APP_DOMAIN,
    credentials: true
  })

  return corsMiddlewareHandler(c, next)
})
