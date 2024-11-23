import { twMerge } from 'tailwind-merge'

import { Box } from '../Box'

import { DIALOG_CONTENT_VARIANTS } from './const'
import { DialogContentProps } from './type'

export const DialogContent = ({
  children,
  className,
  color,
  ...props
}: DialogContentProps) => {
  return (
    <Box
      {...props}
      background={'primary'}
      className={twMerge(DIALOG_CONTENT_VARIANTS({ color }), className)}
    >
      {children}
    </Box>
  )
}
