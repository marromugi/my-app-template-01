import { forwardRef } from 'react'
import { IconButtonProps } from './type'
import { Icon } from '../Icon/Icon'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'
import { ICON_BUTTON_VARIANTS } from './const'

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, size, theme, background, rounded, className, ...props }, ref) => {
    return (
      <button
        type={'button'}
        {...props}
        ref={ref}
        className={twMerge(
          clsx(ICON_BUTTON_VARIANTS({ background, size, rounded })),
          className
        )}
      >
        <Icon icon={icon} size={size} theme={theme} />
      </button>
    )
  }
)

IconButton.displayName = 'IconButton'
