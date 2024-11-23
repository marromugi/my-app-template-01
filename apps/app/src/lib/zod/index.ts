import { z as BaseZod, ZodType } from 'zod'

export const z = {
  ...BaseZod,
  requiredString: ({ minLength }: { minLength?: number }) =>
    BaseZod.string({ required_error: '必須です' }).min(
      minLength ?? 1,
      minLength ? `${minLength}文字以上入力してください` : '必須です'
    ),
  requiredEmail: () =>
    BaseZod.string({ required_error: '必須です' }).email(
      'メールアドレスが不正です'
    ),
  optionalString: () => BaseZod.string().optional()
}

export const safeParse = <T, F>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  schema: ZodType<T, any, any>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any,
  fallback: F
) => {
  try {
    return schema.parse(value)
  } catch {
    return fallback
  }
}
