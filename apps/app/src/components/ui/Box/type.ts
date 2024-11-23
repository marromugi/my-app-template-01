import { ComponentProps, ElementType } from 'react'
import { VariantProps } from 'tailwind-variants'

import { BOX_VARIANTS } from './const'

export type BoxProps<T extends ElementType> = Omit<
  ComponentProps<T>,
  'as'
> & {
  as?: T
} & VariantProps<typeof BOX_VARIANTS>
