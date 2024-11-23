import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

import { TEXT_AREA_VARIANTS } from './const'
import { TextAreaProps } from './type'

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      className,
      background = 'fill',
      outline = 'blue',
      size = 'sm',
      error,
      ...props
    },
    ref
  ) => {
    return (
      <textarea
        {...props}
        aria-required={props['aria-required'] ?? props.required}
        ref={ref}
        className={twMerge(
          TEXT_AREA_VARIANTS({ background, outline, size, error }),
          className
        )}
      />
    )
  }
)

TextArea.displayName = 'TextArea'
