import { AppType } from '@my-app/api'
import { hc } from 'hono/client'

export const client = hc<AppType>(process.env.NEXT_PUBLIC_API_URL ?? '', {
  init: {
    credentials: 'include',
    mode: 'cors'
  }
})
