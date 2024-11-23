import { ComponentProps } from 'react'
import { IconProps } from '../Icon/type'
import { VariantProps } from 'tailwind-variants'
import { ICON_BUTTON_VARIANTS } from './const'

export type IconButtonProps = Pick<
  IconProps,
  'size' | 'theme' | 'icon'
> &
  ComponentProps<'button'> &
  VariantProps<typeof ICON_BUTTON_VARIANTS>
