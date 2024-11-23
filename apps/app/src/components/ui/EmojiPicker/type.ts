import { ComponentProps } from 'react'

export type EmojiPickerProps = {
  emoji: string
  onChangeEmoji: (emoji: string) => void
} & ComponentProps<'div'>
