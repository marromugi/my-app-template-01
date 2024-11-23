import { createElement, ElementType } from 'react'
import { twMerge } from 'tailwind-merge'

import { TYPOGRAPHY_VARIANTS } from './const'
import { TypographyProps } from './type'

export const Typography = <T extends ElementType>({
  as,
  theme = 'base',
  size,
  weight,
  family = 'sans',
  children,
  className,
  ...props
}: TypographyProps<T>) => {
  return createElement(
    as ?? 'div',
    {
      ...props,
      className: twMerge(
        TYPOGRAPHY_VARIANTS({ theme, size, weight, family }),
        className
      )
    },
    children
  )
}
