import { ComponentProps } from 'react'
import { VariantProps } from 'tailwind-variants'

import { TEXT_FIELD_VARIANTS } from './const'

export type TextFieldProps = Omit<ComponentProps<'input'>, 'size'> &
  VariantProps<typeof TEXT_FIELD_VARIANTS>
