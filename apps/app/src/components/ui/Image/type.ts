import { ComponentProps } from 'react'

export type ImageProps = ComponentProps<'img'> & {
  fallbackSrc?: string
}
