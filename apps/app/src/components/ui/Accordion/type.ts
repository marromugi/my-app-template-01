import { ComponentProps } from 'react'

export type AccordionProps = ComponentProps<'div'> & {
  isOpen: boolean
}
