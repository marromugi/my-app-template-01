import * as BaseDialog from '@radix-ui/react-dialog'

import { ImageDialogProps } from './type'
import clsx from 'clsx'
import { useDisclosure } from '../../../hooks/useDisclosure'

export const ImageDialog = ({ src, alt, ...props }: ImageDialogProps) => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  return (
    <>
      <img src={src} alt={alt} onClick={() => onOpen()} {...props} />
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
              'mg-h-dvh mg-w-screen mg-p-2',
              isOpen ? 'mg-animate-fade-in' : 'mg-animate-fade-out'
            )}
            onClick={() => onClose()}
          >
            <img src={src} alt={alt} className={clsx('mg-w-full mg-rounded')} />
          </BaseDialog.Content>
        </BaseDialog.Portal>
      </BaseDialog.Root>
    </>
  )
}
