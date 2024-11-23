import clsx from 'clsx'
import { Flex } from '../../layouts/utils/Flex'
import { EMOJI_LIST } from './const'
import { useDisclosure } from '../../../hooks/useDisclosure'
import { EmojiPickerProps } from './type'
import { Accordion } from '../Accordion'

export const EmojiPicker = ({
  emoji,
  onChangeEmoji,
  ...props
}: EmojiPickerProps) => {
  const { isOpen, onToggle, onClose } = useDisclosure()

  return (
    <Flex direction={'column'} gap={2} {...props}>
      <Flex
        as={'button'}
        center
        className={clsx(
          'mg-bg-gray-50 mg-rounded-full mg-size-16',
          'mg-text-2xl'
        )}
        onClick={onToggle}
      >
        {emoji}
      </Flex>
      <Accordion isOpen={isOpen}>
        <Flex
          wrap
          className={clsx(
            'mg-h-60 mg-overflow-auto',
            'mg-p-2 mg-rounded-lg',
            'mg-bg-gray-50'
          )}
        >
          {EMOJI_LIST.map((emoji) => (
            <button
              className={clsx('mg-p-2 mg-rounded-lg', 'mg-text-lg')}
              key={emoji}
              onClick={() => {
                onChangeEmoji(emoji)
                onClose()
              }}
            >
              {emoji}
            </button>
          ))}
        </Flex>
      </Accordion>
    </Flex>
  )
}
