import clsx from 'clsx'

import { Box } from '../Box'

import { DialogHeaderProps } from './type'
import { Flex } from '../../layouts/utils/Flex'
import { Typography } from '../Typography'
import { DialogTitle } from '@radix-ui/react-dialog'
import { XmarkIcon } from '../../icons'

export const DialogHeader = ({
  children,
  onClose,
  showClose = true
}: DialogHeaderProps) => {
  return (
    <Flex
      as={Box}
      background={'primary'}
      border={'secondary'}
      justify={'between'}
      align={'center'}
      className={clsx('mg-border-b mg-p-4')}
    >
      <DialogTitle>
        <Typography className={clsx('mg-font-bold')} as={'span'} size={'md'}>
          {children}
        </Typography>
      </DialogTitle>
      <div>
        {showClose && (
          <Flex
            center
            as={'button'}
            type={'button'}
            className={clsx(
              'mg-size-6 mg-bg-gray-50',
              'mg-rounded-md',
              'dark:mg-bg-gray-800'
            )}
            onClick={onClose}
          >
            <XmarkIcon className={clsx('mg-size-4', 'mg-text-gray-300')} />
          </Flex>
        )}
      </div>
    </Flex>
  )
}
