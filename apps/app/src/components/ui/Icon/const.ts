import clsx from 'clsx'
import { tv } from 'tailwind-variants'

export const ICON_VARIANTS = tv({
  variants: {
    theme: {
      base: clsx('mg-text-black dark:mg-text-gray-50'),
      description: clsx('mg-text-gray-700 dark:mg-text-gray-400'),
      disabled: clsx('mg-text-gray-600 dark:mg-text-gray-500'),
      fill: clsx('mg-text-white dark:mg-text-black'),
      alert: clsx('mg-text-red-500'),
      success: clsx('mg-text-green-500'),
      primary: clsx('mg-text-primary-900')
    },
    size: {
      xs: clsx('mg-size-2'),
      sm: clsx('mg-size-3'),
      md: clsx('mg-size-4'),
      lg: clsx('mg-size-5'),
      xl: clsx('mg-size-6'),
      '2xl': clsx('mg-size-7'),
      '3xl': clsx('mg-size-8')
    }
  }
})
