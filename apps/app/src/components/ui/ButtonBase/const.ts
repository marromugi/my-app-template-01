import clsx from 'clsx'
import { tv } from 'tailwind-variants'

export const BUTTON_BASE_VARIANTS = tv({
  base: clsx(
    'mg-font-semibold',
    'mg-min-w-[80px]',
    'mg-text-center',
    'mg-transition-all',
    'mg-flex mg-items-center mg-justify-center mg-gap-1',
    'aria-disabled:mg-cursor-not-allowed'
  ),
  variants: {
    size: {
      xs: clsx('mg-rounded-md mg-py-1 mg-px-2 mg-text-xs'),
      sm: clsx('mg-rounded-md mg-p-2 mg-text-xs'),
      md: clsx('mg-rounded-lg mg-px-4 mg-py-3 mg-text-sm'),
      lg: clsx('mg-rounded-lg mg-p-4 mg-text-sm')
    },
    theme: {
      primary: clsx(
        'mg-bg-primary-600 mg-text-white hover:mg-bg-primary-700 hover:mg-text-white',
        'active:mg-bg-primary-800 active:mg-text-white',
        'aria-disabled:!mg-bg-primary-300 aria-disabled:!mg-text-primary-100',
        '[&.outline]:[&.outline]:mg-border-[1.6px] [&.outline]:mg-border-primary-700 [&.outline]:mg-bg-transparent [&.outline]:mg-text-primary-900',
        '[&.outline]:hover:mg-bg-primary-50 [&.outline]:active:mg-bg-primary-100',
        '[&.ghost]:mg-bg-white [&.ghost]:mg-text-gray-900 [&.ghost]:hover:mg-bg-gray-50 [&.ghost]:active:mg-bg-gray-100',

        // dark
        'dark:mg-bg-black dark:mg-text-white hover:dark:mg-bg-gray-600',
        'active:dark:mg-bg-gray-700',
        'aria-disabled:dark:!mg-bg-gray-800 aria-disabled:dark:!mg-text-gray-500',
        '[&.outline]:dark:mg-border-[1.6px] [&.outline]:dark:mg-border-gray-600 [&.outline]:dark:mg-bg-transparent [&.outline]:dark:mg-text-white',
        '[&.outline]:dark:hover:mg-bg-gray-800 [&.outline]:dark:active:mg-bg-gray-900',
        '[&.ghost]:dark:mg-bg-transparent [&.ghost]:dark:mg-text-white [&.ghost]:dark:hover:mg-bg-gray-800 [&.ghost]:dark:active:mg-bg-gray-700'
      ),
      neutral: clsx(
        'mg-bg-gray-50 mg-text-primary-900 hover:mg-bg-gray-100',
        'active:mg-bg-gray-200',
        'aria-disabled:!mg-bg-gray-300 aria-disabled:!mg-text-gray-100',
        '[&.outline]:[&.outline]:mg-border-[1.6px] [&.outline]:mg-border-gray-200 [&.outline]:mg-bg-transparent [&.outline]:mg-text-gray-900',
        '[&.outline]:hover:mg-bg-gray-50 [&.outline]:active:mg-bg-gray-300',
        '[&.ghost]:mg-bg-white [&.ghost]:mg-text-gray-900 [&.ghost]:hover:mg-bg-gray-50 [&.ghost]:active:mg-bg-gray-100',

        // dark
        'dark:mg-bg-gray-800 dark:mg-text-white hover:dark:mg-bg-gray-900',
        'active:dark:mg-bg-gray-black',
        'aria-disabled:dark:!mg-bg-gray-800 aria-disabled:dark:!mg-text-gray-500',
        '[&.outline]:dark:mg-border-[1.6px] [&.outline]:dark:mg-border-gray-600 [&.outline]:dark:mg-bg-transparent [&.outline]:dark:mg-text-white',
        '[&.outline]:dark:hover:mg-bg-gray-800 [&.outline]:dark:active:mg-bg-gray-900',
        '[&.ghost]:dark:mg-bg-transparent [&.ghost]:dark:mg-text-white [&.ghost]:dark:hover:mg-bg-gray-800 [&.ghost]:dark:active:mg-bg-gray-700'
      ),
      alert: clsx(
        'mg-bg-error-500 mg-text-white hover:mg-bg-error-700 hover:mg-text-white',
        'active:mg-bg-error-700',
        'aria-disabled:!mg-bg-error-300 aria-disabled:!mg-text-error-100',
        '[&.outline]:[&.outline]:mg-border-[1.6px] [&.outline]:mg-border-error-500 [&.outline]:mg-bg-transparent [&.outline]:mg-text-error-500',
        '[&.outline]:hover:mg-bg-error-50 [&.outline]:active:mg-bg-error-100',
        '[&.ghost]:mg-bg-white [&.ghost]:mg-text-error-500 [&.ghost]:hover:mg-bg-error-50 [&.ghost]:active:mg-bg-error-100',

        // dark
        'dark:mg-bg-red-500 dark:mg-text-white hover:dark:mg-bg-red-600',
        'active:dark:mg-bg-red-700',
        'aria-disabled:dark:!mg-bg-red-800 aria-disabled:dark:!mg-text-red-500',
        '[&.outline]:dark:mg-border-[1.6px] [&.outline]:dark:mg-border-red-600 [&.outline]:dark:mg-bg-transparent [&.outline]:dark:mg-text-white',
        '[&.outline]:dark:hover:mg-bg-red-800 [&.outline]:dark:active:mg-bg-red-900',
        '[&.ghost]:dark:mg-bg-transparent [&.ghost]:dark:mg-text-white [&.ghost]:dark:hover:mg-bg-red-800 [&.ghost]:dark:active:mg-bg-red-700'
      ),
      fill: clsx(
        'mg-bg-white mg-text-primary-900 hover:mg-bg-gray-50',
        'active:mg-bg-gray-100',
        'aria-disabled:!mg-bg-gray-300 aria-disabled:!mg-text-gray-100',
        '[&.outline]:[&.outline]:mg-border-[1.6px] [&.outline]:mg-border-gray-200 [&.outline]:mg-bg-transparent [&.outline]:mg-text-gray-900',
        '[&.outline]:hover:mg-bg-gray-50 [&.outline]:active:mg-bg-gray-300',
        '[&.ghost]:mg-bg-white [&.ghost]:mg-text-gray-900 [&.ghost]:hover:mg-bg-gray-50 [&.ghost]:active:mg-bg-gray-100',

        // dark
        'dark:mg-bg-gray-800 dark:mg-text-white hover:dark:mg-bg-gray-900',
        'active:dark:mg-bg-gray-black',
        'aria-disabled:dark:!mg-bg-gray-800 aria-disabled:dark:!mg-text-gray-500',
        '[&.outline]:dark:mg-border-[1.6px] [&.outline]:dark:mg-border-gray-600 [&.outline]:dark:mg-bg-transparent [&.outline]:dark:mg-text-white',
        '[&.outline]:dark:hover:mg-bg-gray-800 [&.outline]:dark:active:mg-bg-gray-900',
        '[&.ghost]:dark:mg-bg-transparent [&.ghost]:dark:mg-text-white [&.ghost]:dark:hover:mg-bg-gray-800 [&.ghost]:dark:active:mg-bg-gray-700'
      )
    }
  }
})

export const BUTTON_BASE_ICON_VARIANTS = tv({
  base: clsx('mg-size-5'),
  variants: {
    theme: {
      primary: clsx(
        'mg-text-white mg-outline-white',
        '[&.outline]:mg-stroke-gray-900 [&.outline]:mg-text-gray-900',
        '[&.ghost]:mg-stroke-gray-900 [&.ghost]:mg-text-gray-900'
      ),
      neutral: clsx(
        'mg-text-primary-800 mg-outline-primary-800',
        '[&.outline]:mg-stroke-gray-900 [&.outline]:mg-text-gray-900',
        '[&.ghost]:mg-stroke-gray-900 [&.ghost]:mg-text-gray-900'
      ),
      alert: clsx(
        'mg-text-white mg-outline-white',
        '[&.outline]:mg-stroke-red-900 [&.outline]:mg-text-red-900',
        '[&.ghost]:mg-stroke-red-900 [&.ghost]:mg-text-red-900'
      ),
      fill: clsx(
        'mg-text-primary-800 mg-outline-primary-800',
        '[&.outline]:mg-stroke-gray-900 [&.outline]:mg-text-gray-900',
        '[&.ghost]:mg-stroke-gray-900 [&.ghost]:mg-text-gray-900'
      )
    }
  }
})

export const BUTTON_BASE_LOADER_VARIANTS = tv({
  base: clsx('mg-absolute'),
  variants: {
    theme: {
      primary: clsx(
        'mg-bg-white',
        '[&.outline]:mg-bg-gray-900',
        '[&.ghost]:mg-bg-gray-900'
      ),
      neutral: clsx(
        'mg-bg-white',
        '[&.outline]:mg-bg-gray-900',
        '[&.ghost]:mg-bg-gray-900'
      ),
      alert: clsx(
        'mg-bg-white',
        '[&.outline]:mg-bg-red-900',
        '[&.ghost]:mg-bg-red-900'
      ),
      fill: clsx(
        'mg-bg-white',
        '[&.outline]:mg-bg-gray-900',
        '[&.ghost]:mg-bg-gray-900'
      )
    }
  }
})
