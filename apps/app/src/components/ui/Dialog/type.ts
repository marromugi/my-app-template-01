import React from 'react'
import { VariantProps } from 'tailwind-variants'

import { DIALOG_CONTENT_VARIANTS } from './const'

export type DialogProps = {
  isOpen: boolean
  onClose: () => void
  children?: React.ReactNode
} & VariantProps<typeof DIALOG_CONTENT_VARIANTS>
