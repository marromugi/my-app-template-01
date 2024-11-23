import { createHonoClient } from '../shared/factories/hono'

export const logger = createHonoClient().use('/', async (c, next) => {
  const start = Date.now()

  // リクエスト情報のログ出力
  console.log(`[${new Date().toISOString()}] ${c.req.method} ${c.req.path}`)

  await next()

  const end = Date.now()
  const duration = end - start

  // レスポンス情報のログ出力
  console.log(
    `[${new Date().toISOString()}] ${c.req.method} ${c.req.path} - ${c.res.status} (${duration}ms)`
  )
})
