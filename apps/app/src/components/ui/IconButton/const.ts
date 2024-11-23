import clsx from 'clsx'
import { tv } from 'tailwind-variants'

export const ICON_BUTTON_VARIANTS = tv({
  base: clsx(
    'mg-flex mg-justify-center mg-items-center',
    'mg-transition-colors'
  ),
  variants: {
    background: {
      primary: 'mg-bg-primary-700 hover:mg-bg-primary-800',
      secondary: 'mg-bg-gray-100 hover:mg-bg-gray-200',
      alert: 'mg-bg-red-500 hover:mg-bg-red-600'
    },
    size: {
      xs: clsx('mg-size-8'),
      sm: clsx('mg-size-9'),
      md: clsx('mg-size-10'),
      lg: clsx('mg-size-11'),
      xl: clsx('mg-size-12'),
      '2xl': clsx('mg-size-14'),
      '3xl': clsx('mg-size-16')
    },
    rounded: {
      true: 'mg-rounded-full',
      false: 'mg-rounded-lg'
    }
  }
})
