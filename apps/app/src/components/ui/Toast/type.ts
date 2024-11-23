import { VariantProps } from 'tailwind-variants'

import { TOAST_VARIANTS } from './const'

export type ToastProps = VariantProps<typeof TOAST_VARIANTS> & {
  message: string
  subMessage?: string | null
  isVisible: boolean
  onClose?: () => void
}
