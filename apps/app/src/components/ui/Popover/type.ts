import { PopoverContentProps } from '@radix-ui/react-popover'
import React, { ReactNode } from 'react'

export type PopoverProps = PopoverContentProps & {
  isOpen?: boolean
  onChangeOpen?: (v: boolean) => void
  trigger: React.ReactNode
  showArrow?: boolean
  children?: ReactNode
}
