import { useRef } from 'react'

export const useIntersectionObserver = (
  callback: (entry: IntersectionObserverEntry) => void,
  options?: IntersectionObserverInit
) => {
  const observer = useRef<IntersectionObserver>(
    new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry)
        }
      })
    }, options)
  )

  return observer
}
