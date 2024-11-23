import { forwardRef } from 'react'

import { ButtonBase } from '../ButtonBase'

import { ButtonProps } from './type'

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { theme, size, variant, isLoading, children, icon, iconPosition, ...props },
    ref
  ) => {
    return (
      <button {...props} ref={ref}>
        <ButtonBase
          as={'span'}
          className={props.className}
          theme={theme}
          size={size}
          variant={variant}
          isLoading={isLoading}
          icon={icon}
          iconPosition={iconPosition}
          aria-disabled={props.disabled}
        >
          {children}
        </ButtonBase>
      </button>
    )
  }
)

Button.displayName = 'Button'
