import { z } from '@/lib/zod'

export const signupSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z
    .string()
    .min(8, 'パスワードは最低8文字必要です')
    .refine(
      (val) => !/\s/.test(val),
      'パスワードに空白を含めることはできません'
    )
    .refine(
      (val) => /[A-Z]/.test(val),
      'パスワードには少なくとも1つの大文字が必要です'
    )
    .refine(
      (val) => /[a-z]/.test(val),
      'パスワードには少なくとも1つの小文字が必要です'
    )
    .refine(
      (val) => /\d/.test(val),
      'パスワードには少なくとも1つの数字が必要です'
    )
    .refine(
      (val) => /[!@#$%^&*(),.?":{}|<>_-]/.test(val),
      'パスワードには少なくとも1つの特殊文字が必要です'
    )
})
