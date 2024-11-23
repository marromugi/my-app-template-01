import clsx from 'clsx'
import { tv } from 'tailwind-variants'

export const GRID_VARIANTS = tv({
  base: clsx('mg-grid'),
  variants: {
    column: {
      1: 'mg-grid-cols-1',
      2: 'mg-grid-cols-2',
      3: 'mg-grid-cols-3',
      4: 'mg-grid-cols-4'
    },
    row: {
      1: 'mg-grid-rows-1',
      2: 'mg-grid-rows-2',
      3: 'mg-grid-rows-3',
      4: 'mg-grid-rows-4'
    },
    gap: {
      1: 'mg-gap-1',
      2: 'mg-gap-2',
      3: 'mg-gap-3',
      4: 'mg-gap-4',
      5: 'mg-gap-5',
      6: 'mg-gap-6',
      7: 'mg-gap-7',
      8: 'mg-gap-8'
    },
    justify: {
      center: clsx('mg-justify-center'),
      between: clsx('mg-justify-between'),
      end: clsx('mg-justify-end')
    },
    align: {
      center: clsx('mg-items-center'),
      baseline: clsx('mg-items-baseline'),
      start: clsx('mg-items-start'),
      end: clsx('mg-items-end')
    },
    center: {
      true: clsx('mg-items-center mg-justify-center')
    }
  }
})
