import { createElement, ElementType } from 'react'
import { twMerge } from 'tailwind-merge'

import { BOX_VARIANTS } from './const'
import { BoxProps } from './type'

export const Box = <T extends ElementType>({
  as,
  border,
  background = 'primary',
  children,
  className,
  ...props
}: BoxProps<T>) => {
  return createElement(
    as ?? 'div',
    {
      ...props,
      className: twMerge(
        BOX_VARIANTS({ background, border }),
        className
      )
    },
    children
  )
}
