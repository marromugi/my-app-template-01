import clsx from 'clsx'
import { tv } from 'tailwind-variants'

export const ALERT_VARIANTS = tv({
  base: clsx('mg-px-2 mg-py-2', 'mg-rounded-md mg-border'),
  variants: {
    theme: {
      alert: clsx(
        'mg-bg-red-50',
        'mg-border-red-500',
        '[&>p]:!mg-text-red-500'
      ),
      info: clsx(
        'mg-bg-blue-50',
        'mg-border-blue-500',
        '[&>p]:!mg-text-blue-800'
      ),
      warning: clsx(
        'mg-bg-yellow-50',
        'mg-border-yellow-500',
        '[&>p]:!mg-text-yellow-900'
      ),
      success: clsx(
        'mg-bg-green-50',
        'mg-border-green-500',
        '[&>p]:!mg-text-green-800'
      ),
      neutral: clsx(
        'mg-bg-gray-50',
        'mg-border-gray-200',
        '[&>p]:!mg-text-gray-900'
      )
    }
  }
})
