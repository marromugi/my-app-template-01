import clsx from 'clsx'
import { tv } from 'tailwind-variants'

export const POPOVER_CONTANT_VARIANTS = tv({
  base: clsx(
    'mg-rounded-lg mg-p-3 mg-shadow-1 mg-z-popover',
    'mg-bg-white dark:mg-bg-gray-800'
  ),
  variants: {
    side: {
      top: clsx(
        'mg-animate-popover-top-fade-in',
        'aria-hidden:mg-animate-popover-top-fade-out'
      ),
      right: clsx('mg-animate-popover-right-fade-in'),
      bottom: clsx(
        'mg-animate-popover-bottom-fade-in',
        'aria-hidden:mg-animate-popover-bottom-fade-out'
      ),
      left: clsx('mg-animate-popover-left-fade-in')
    }
  }
})
