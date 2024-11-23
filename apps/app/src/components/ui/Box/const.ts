import clsx from 'clsx'
import { tv } from 'tailwind-variants'

export const BOX_VARIANTS = tv({
  base: clsx(''),
  variants: {
    background: {
      primary: clsx(
        'mg-bg-white dark:mg-bg-gray-900 dark:mg-text-white'
      ),
      secondary: clsx(
        'mg-bg-gray-50 dark:mg-bg-gray-800 dark:mg-text-white'
      ),
      tertialy: clsx(
        'mg-bg-gray-100 dark:mg-bg-gray-700 dark:mg-text-white'
      ),
      fill: clsx('mg-bg-white dark:mg-bg-black dark:mg-text-white')
    },
    border: {
      primary: clsx('mg-border-gray-50 dark:mg-border-gray-800'),
      secondary: clsx('mg-border-gray-100 dark:mg-border-gray-700')
    }
  }
})
