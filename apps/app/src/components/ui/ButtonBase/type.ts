import { ComponentPropsWithoutRef, ElementType, SVGProps } from 'react'
import { VariantProps } from 'tailwind-variants'

import { BUTTON_BASE_VARIANTS } from './const'

export type ButtonBaseProps<T extends ElementType> = {
  as?: T
  variant?: 'outline' | 'ghost' | 'fill'
  icon?: ({ ...props }: SVGProps<SVGSVGElement>) => JSX.Element
  iconPosition?: 'left' | 'right'
  isLoading?: boolean
} & ComponentPropsWithoutRef<T> &
  VariantProps<typeof BUTTON_BASE_VARIANTS>
