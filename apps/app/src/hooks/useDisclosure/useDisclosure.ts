import { useCallback, useState } from 'react'

export const useDisclosure = (defaultOpen = false) => {
  const [isOpen, setOpen] = useState(defaultOpen)

  const onOpen = useCallback(() => setOpen(true), [setOpen])
  const onClose = useCallback(() => setOpen(false), [setOpen])
  const onToggle = useCallback(
    () => setOpen((prev) => !prev),
    [setOpen]
  )
  const onChange = useCallback(
    (isOpen: boolean) => setOpen(isOpen),
    [setOpen]
  )

  return {
    isOpen,
    onOpen,
    onChange,
    onClose,
    onToggle
  }
}
