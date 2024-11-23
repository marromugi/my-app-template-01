import { StatusCode, SuccessStatusCode } from 'hono/utils/http-status'

export const SUCCESS_STATUS_CODES: StatusCode[] = [
  200, 201, 202, 203, 204, 205, 206, 207, 208, 226
] as const satisfies SuccessStatusCode[]
