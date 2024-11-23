import clsx from 'clsx'
import { tv } from 'tailwind-variants'

export const FORM_FIELD_WRAPPER_VARIANTS = tv({
  base: clsx('mg-w-full', 'mg-flex', 'mg-gap-y-2'),
  variants: {
    direction: {
      vertical: clsx('mg-flex-col'),
      horizontal: clsx('mg-flex-row', 'mg-items-center', 'mg-gap-2')
    }
  },
  defaultVariants: {
    direction: 'vertical'
  }
})

export const FORM_FIELD_WRAPPER_LABEL_VARIANTS = tv({
  base: clsx('mg-font-semibold'),
  variants: {
    size: {
      xs: clsx('mg-text-xs'),
      sm: clsx('mg-text-sm'),
      md: clsx('mg-text-base')
    }
  },
  defaultVariants: {
    size: 'sm'
  }
})

export const FORM_FIELD_WRAPPER_DESCRIPTION_VARIANTS = tv({
  base: clsx(
    'mg-mb-1 mg-text-xs mg-text-gray-700 dark:mg-text-gray-400'
  )
})
