import { sign, verify } from 'hono/jwt'

import { JWTPayload as BaseJWTPayload } from 'hono/utils/jwt/types'
import { AppContext } from '../factories/hono'
import { setCookie } from 'hono/cookie'
import { COOKIE_KEYS } from '../../const/cookie'

export type JWTPayload = BaseJWTPayload & {
  email: string
}

interface GenerateTokenParams {
  sub: string
  email: string
}

export class JwtService {
  private readonly expiresIn: number = 60 * 60 * 24 * 30 // 30 days in seconds

  constructor(private readonly c: AppContext) {}

  private getSecret(): string {
    return this.c.env.JWT_SECRET
  }

  async generateToken(params: GenerateTokenParams): Promise<string> {
    const payload: JWTPayload = {
      sub: params.sub,
      email: params.email,
      exp: Math.floor(Date.now() / 1000) + this.expiresIn
    }
    return await sign(payload as JWTPayload, this.getSecret())
  }

  async verifyToken(token: string): Promise<JWTPayload> {
    const payload = await verify(token, this.getSecret())
    return payload as unknown as JWTPayload
  }

  async decodeToken(token: string): Promise<JWTPayload | null> {
    try {
      return await this.verifyToken(token)
    } catch {
      return null
    }
  }

  removeToken() {
    setCookie(this.c, COOKIE_KEYS.token, '', {
      expires: new Date(0),
      path: '/'
    })
  }
}
