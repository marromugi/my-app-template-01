import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

import { TEXT_FIELD_VARIANTS } from './const'
import { TextFieldProps } from './type'

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      className,
      background = 'fill',
      outline = 'blue',
      size = 'md',
      error,
      ...props
    },
    ref
  ) => {
    return (
      <input
        {...props}
        aria-required={props['aria-required'] ?? props.required}
        ref={ref}
        className={twMerge(
          TEXT_FIELD_VARIANTS({ background, outline, size, error }),
          className
        )}
      />
    )
  }
)

TextField.displayName = 'TextField'
