import { ComponentProps } from 'react'
import { VariantProps } from 'tailwind-variants'
import { ALERT_VARIANTS } from './const'

export type AlertProps = ComponentProps<'div'> &
  VariantProps<typeof ALERT_VARIANTS>
