import clsx from 'clsx'
import { tv } from 'tailwind-variants'

export const TEXT_FIELD_VARIANTS = tv({
  base: clsx(
    'mg-rounded-md mg-border mg-text-sm',
    'mg-outline-none',
    'mg-transition-all',
    'focus:mg-border-primary-700',
    'disabled:mg-bg-gray-50 disabled:mg-text-gray-600',
    'disabled:mg-cursor-not-allowed',
    'dark:mg-text-white dark:mg-caret-white',
    'dark:disabled:mg-bg-gray-600-alpha dark:disabled:mg-text-gray-300'
  ),
  variants: {
    background: {
      fill: clsx('mg-bg-white dark:mg-bg-gray-900'),
      ghost: clsx('mg-bg-transparent')
    },
    outline: {
      blue: clsx('mg-ring-blue-500'),
      yellow: clsx('mg-ring-yellow-700')
    },
    size: {
      sm: clsx('mg-text-sm', 'mg-p-3'),
      md: clsx('mg-text-md', 'mg-p-3')
    },
    error: {
      true: clsx('mg-border-red-800'),
      false: clsx('mg-border-gray-300', 'dark:mg-border-gray-800')
    }
  }
})
