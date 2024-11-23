import clsx from 'clsx'
import { tv } from 'tailwind-variants'

export const TYPOGRAPHY_VARIANTS = tv({
  base: clsx(''),
  variants: {
    theme: {
      base: clsx('mg-text-black dark:mg-text-gray-50'),
      description: clsx('mg-text-gray-600 dark:mg-text-gray-400'),
      disabled: clsx('mg-text-gray-500 dark:mg-text-gray-600'),
      fill: clsx('mg-text-white dark:mg-text-white'),
      link: clsx('mg-text-blue-600', 'mg-underline'),
      alert: clsx('mg-text-red-500')
    },
    size: {
      xxs: clsx('mg-text-[10px]'),
      xs: clsx('mg-text-xs mg-leading-xs'),
      sm: clsx('mg-text-sm mg-leading-sm'),
      md: clsx('mg-text-md mg-leading-md'),
      lg: clsx('mg-text-lg mg-leading-lg'),
      xl: clsx('mg-text-xl mg-leading-xl'),
      '2xl': clsx('mg-text-2xl mg-leading-2xl'),
      '3xl': clsx('mg-text-3xl mg-leading-3xl')
    },
    weight: {
      medium: clsx('mg-font-medium'),
      semibold: clsx('mg-font-semibold'),
      bold: clsx('mg-font-bold')
    },
    family: {
      sans: clsx('mg-font-sans')
    }
  }
})
