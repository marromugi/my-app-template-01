import { twMerge } from 'tailwind-merge'

import { LoaderProps } from './type'

export const Loader = ({ className, ...props }: LoaderProps) => {
  return (
    <span
      {...props}
      className={twMerge(
        'mg-block',
        'mg-size-2 mg-rounded-full mg-animate-ping mg-bg-gray-600 dark:mg-bg-gray-400',
        className
      )}
    ></span>
  )
}
