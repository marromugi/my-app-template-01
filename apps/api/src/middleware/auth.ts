import { Next } from 'hono'
import { JwtService } from '../shared/auth/JwtService'
import { AppError } from '../shared/error/AppError'
import { AppContext, createHonoClient } from '../shared/factories/hono'
import { setCookie } from 'hono/cookie'
import { COOKIE_KEYS } from '../const/cookie'

export const auth = createHonoClient().use(
  '/',
  async (c: AppContext, next: Next) => {
    const authHeader = c.req.header('Authorization')

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new AppError('Unauthorized', 401, 'UNAUTHORIZED')
    }

    const token = authHeader.split(' ')[1]
    const jwtService = new JwtService(c)
    try {
      const payload = await jwtService.verifyToken(token)
      c.set('jwtPayload', payload)
      await next()
    } catch (error) {
      setCookie(c, COOKIE_KEYS.token, '', {
        path: '/',
        expires: new Date(0)
      })
      throw new AppError('Invalid token', 401, 'INVALID_TOKEN')
    }
  }
)
