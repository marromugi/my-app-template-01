import { useEffect, useRef } from 'react'
import { AccordionProps } from './type'

export const Accordion = ({ children, isOpen, ...props }: AccordionProps) => {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (isOpen) {
      const height = ref.current?.children[0].clientHeight ?? 0
      ref.current?.style.setProperty('height', `${height}px`)
    } else {
      ref.current?.style.setProperty('height', `0px`)
    }
  }, [isOpen])
  return (
    <div {...props} ref={ref} className="mg-overflow-hidden mg-transition-all">
      {children}
    </div>
  )
}
