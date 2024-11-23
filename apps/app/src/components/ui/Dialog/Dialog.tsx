import * as BaseDialog from '@radix-ui/react-dialog'
import clsx from 'clsx'

import { DIALOG_CONTENT_VARIANTS } from './const'
import { DialogProps } from './type'

export const Dialog = ({
  isOpen,
  onClose,
  children,
  size = 'lg'
}: DialogProps) => {
  return (
    <BaseDialog.Root
      open={isOpen}
      onOpenChange={(isOpen) => {
        if (!isOpen) {
          onClose()
        }
      }}
    >
      <BaseDialog.Portal>
        <BaseDialog.Overlay
          className={clsx(
            'mg-fixed mg-left-0 mg-top-0 mg-bg-gray-900-alpha dark:mg-bg-gray-800-alpha',
            'mg-h-dvh mg-w-screen',
            'mg-z-[50]',
            'mg-opacity-0',
            isOpen ? 'mg-animate-fade-in' : 'mg-animate-fade-out'
          )}
          onClick={() => onClose()}
        />
        <BaseDialog.Content
          className={clsx(
            'mg-fixed mg-left-0 mg-top-0',
            'mg-z-[50]',
            'mg-flex mg-flex-col mg-items-center mg-justify-center',
            'mg-h-dvh mg-w-screen mg-p-4',
            isOpen ? 'mg-animate-fade-in' : 'mg-animate-fade-out'
          )}
          onClick={() => onClose()}
        >
          <div
            className={DIALOG_CONTENT_VARIANTS({ size })}
            onClick={(e) => {
              e.stopPropagation()
            }}
          >
            {children}
          </div>
        </BaseDialog.Content>
      </BaseDialog.Portal>
    </BaseDialog.Root>
  )
}
