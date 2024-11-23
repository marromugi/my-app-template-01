import { Context, Hono } from 'hono';
import { JWTPayload } from 'hono/utils/jwt/types';

type Bindings = {
  JWT_SECRET: string;
  DB: D1Database;
  APP_DOMAIN: string;
};

type Variables = {
  jwtPayload: JWTPayload & {
    sub: string;
    email: string;
    exp: number;
  };
};

export type AppEnv = {
  Bindings: Bindings;
  Variables: Variables;
};

export type AppContext = Context<AppEnv>;

export const createHonoClient = () => {
  return new Hono<AppEnv>();
}; 