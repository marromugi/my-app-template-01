import clsx from 'clsx'

import { Box } from '../Box'

import { DialogFooterProps } from './type'
import { Flex } from '../../layouts/utils/Flex'

export const DialogFooter = ({ children }: DialogFooterProps) => {
  return (
    <Flex
      as={Box}
      background={'primary'}
      border={'secondary'}
      justify={'end'}
      gap={2}
      className={clsx('mg-border-t mg-border-gray-100 mg-p-4')}
    >
      {children}
    </Flex>
  )
}
