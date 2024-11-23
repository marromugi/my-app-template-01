import { forwardRef } from 'react'
import { ImageProps } from './type'

export const Image = forwardRef<HTMLImageElement, ImageProps>(
  ({ src, fallbackSrc = '/placeholder.webp', ...props }, ref) => {
    return (
      <picture>
        {src && <source srcSet={src} />}
        <img {...props} src={fallbackSrc} alt={props.alt} ref={ref} />
      </picture>
    )
  }
)

Image.displayName = 'Image'
