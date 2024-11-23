import { getCookie } from 'hono/cookie'

import { createHonoClient } from '../shared/factories/hono'

/**Cookie から Bearerトークンを設定するmiddleware */
export const app = createHonoClient().use('/', async (c, next) => {
  const accessToken = getCookie(c, 'mimo-token')

  if (accessToken) {
    const req = new Request(c.req.raw)
    req.headers.set('Authorization', `Bearer ${accessToken}`)
    c.req.raw = req
  }

  await next()
})

export default app
