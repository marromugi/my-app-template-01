import { ComponentProps, SVGProps } from 'react'
import { VariantProps } from 'tailwind-variants'

import { ICON_VARIANTS } from './const'

export type IconProps = {
  icon: ({ ...props }: SVGProps<SVGSVGElement>) => JSX.Element
} & VariantProps<typeof ICON_VARIANTS> &
  Omit<ComponentProps<'svg'>, 'children'>
