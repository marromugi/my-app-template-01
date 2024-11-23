import { ComponentProps, ElementType } from 'react'
import { VariantProps } from 'tailwind-variants'

import { TYPOGRAPHY_VARIANTS } from './const'

export type TypographyProps<T extends ElementType> = Omit<
  ComponentProps<T>,
  keyof VariantProps<typeof TYPOGRAPHY_VARIANTS>
> & {
  as?: T
} & VariantProps<typeof TYPOGRAPHY_VARIANTS>
