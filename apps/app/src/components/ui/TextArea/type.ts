import { ComponentProps } from 'react'
import { VariantProps } from 'tailwind-variants'

import { TEXT_AREA_VARIANTS } from './const'

export type TextAreaProps = Omit<ComponentProps<'textarea'>, 'size'> &
  VariantProps<typeof TEXT_AREA_VARIANTS>
