import clsx from 'clsx'
import { tv } from 'tailwind-variants'

export const TOAST_ICON_VARIANTS = tv({
  base: clsx('mg-size-5'),
  variants: {
    theme: {
      success: clsx('mg-fill-green-600'),
      warning: clsx('mg-fill-yellow-400'),
      error: clsx('mg-fill-red-500')
    }
  }
})

export const TOAST_ICON_CONTAINER_VARIANTS = tv({
  base: clsx(
    'mg-rounded-full',
    'mg-size-10 mg-border-2',
    'mg-bg-white mg-shadow-sm',
    'mg-shrink-0'
  ),
  variants: {
    theme: {
      success: clsx('mg-border-green-100-alpha'),
      warning: clsx('mg-border-yellow-100-alpha'),
      error: clsx('mg-border-red-100-alpha')
    }
  }
})

export const TOAST_VARIANTS = tv({
  base: clsx('mg-rounded-md', 'mg-px-2', 'mg-shadow-1'),
  variants: {
    isVisible: {
      true: clsx('mg-animate-fade-in-from-b'),
      false: clsx('mg-animate-fade-out-to-b')
    },
    theme: {
      success: clsx('mg-bg-primary-800'),
      warning: clsx('mg-bg-warning-600'),
      error: clsx('mg-bg-error-600')
    },
    size: {
      sm: clsx('mg-w-1/2 mg-py-1'),
      md: clsx('mg-w-3/5 mg-py-1'),
      lg: clsx('mg-w-[calc(100vw_-_-32px)] mg-py-2')
    }
  }
})
