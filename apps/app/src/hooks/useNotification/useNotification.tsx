import { useCallback } from 'react'
import { toast, ToastOptions } from 'react-hot-toast'

import { Toast } from '@/components/ui/Toast'

type Props = Pick<ToastOptions, 'id'> & {
  theme: 'success' | 'error' | 'warning'
  size?: 'sm' | 'md' | 'lg'
  message: string
  subMessage?: string | null
}

const DURATION: { [key in Props['theme']]: number } = {
  success: 13000,
  error: Infinity,
  warning: 6000
}

export const useNotification = () => {
  const notify = useCallback(
    ({ theme, size, id, message, subMessage }: Props) => {
      toast.custom(
        (t) => (
          <Toast
            key={t.id}
            theme={theme ?? 'success'}
            message={message}
            subMessage={subMessage}
            size={size}
            isVisible={t.visible}
            onClose={() => toast.dismiss(t.id)}
          />
        ),
        {
          id,
          duration: DURATION[theme ?? 'success']
        }
      )
    },
    []
  )
  return { notify }
}
