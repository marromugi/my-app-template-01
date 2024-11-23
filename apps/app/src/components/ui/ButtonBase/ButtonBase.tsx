import clsx from 'clsx'
import { createElement, ElementType } from 'react'
import { twMerge } from 'tailwind-merge'

import { Loader } from '../Loader'

import {
  BUTTON_BASE_ICON_VARIANTS,
  BUTTON_BASE_LOADER_VARIANTS,
  BUTTON_BASE_VARIANTS
} from './const'
import { ButtonBaseProps } from './type'
import { Flex } from '../../layouts/utils/Flex'

export const ButtonBase = <T extends ElementType>({
  as,
  size = 'md',
  theme = 'primary',
  variant = 'fill',
  children,
  icon,
  iconPosition = 'left',
  className,
  isLoading,
  ...props
}: ButtonBaseProps<T>) => {
  const Icon = icon
  return createElement(
    as ?? 'span',
    {
      ...props,
      className: clsx(
        twMerge(BUTTON_BASE_VARIANTS({ size, theme }), className),
        variant
      )
    },
    <>
      <Flex
        align={'center'}
        gap={2}
        className={clsx(
          isLoading ? 'mg-opacity-0' : 'mg-animate-fade-in'
        )}
      >
        {Icon && iconPosition === 'left' && (
          <Icon className={BUTTON_BASE_ICON_VARIANTS({ theme })} />
        )}
        {children}
        {Icon && iconPosition === 'right' && (
          <Icon className={BUTTON_BASE_ICON_VARIANTS({ theme })} />
        )}
      </Flex>
      {isLoading && (
        <Loader className={BUTTON_BASE_LOADER_VARIANTS({ theme })} />
      )}
    </>
  )
}
