import { twMerge } from 'tailwind-merge'

import { ICON_VARIANTS } from './const'
import { IconProps } from './type'

export const Icon = ({
  icon,
  theme,
  size,
  className,
  ...props
}: IconProps) => {
  const Icon = icon
  return (
    <Icon
      {...props}
      className={twMerge(ICON_VARIANTS({ theme, size }), className)}
    />
  )
}
