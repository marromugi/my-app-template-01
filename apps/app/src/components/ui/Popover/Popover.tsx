import * as BasePopover from '@radix-ui/react-popover'

import { useDisclosure } from '@/hooks/useDisclosure'

import { POPOVER_CONTANT_VARIANTS } from './const'
import { PopoverProps } from './type'

export const Popover = ({
  trigger,
  showArrow,
  children,
  isOpen: _isOpen,
  onChangeOpen: _onChangeOpen,
  ...props
}: PopoverProps) => {
  const { isOpen, onChange } = useDisclosure()
  const isOpenPopover = typeof _isOpen === 'undefined' ? isOpen : _isOpen
  const onOpenChange =
    typeof _onChangeOpen === 'undefined' ? onChange : _onChangeOpen
  return (
    <BasePopover.Root
      open={isOpenPopover}
      onOpenChange={(open) => {
        if (!open) {
          onOpenChange(false)
        }
      }}
    >
      <BasePopover.Anchor>{trigger}</BasePopover.Anchor>
      <BasePopover.Portal container={document.body.parentElement}>
        <BasePopover.Content
          sideOffset={4}
          aria-hidden={!_isOpen}
          {...props}
          className={POPOVER_CONTANT_VARIANTS({ side: props.side })}
        >
          {children}
          {/* <BasePopover.Close>
            <XmarkIcon
              className={clsx(
                'mg-size-6 mg-rounded-lg mg-p-1',
                'mg-absolute mg-right-3 mg-top-3',
                'mg-bg-gray-50 mg-text-gray-300',
                'dark:mg-bg-gray-700 dark:mg-text-gray-400'
              )}
            />
          </BasePopover.Close> */}
          {showArrow && <BasePopover.Arrow />}
        </BasePopover.Content>
      </BasePopover.Portal>
    </BasePopover.Root>
  )
}
