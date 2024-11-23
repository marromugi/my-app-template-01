import { z } from '@/lib/zod'

export const loginSchema = z.object({
  email: z.requiredEmail(),
  password: z.requiredString({})
})
