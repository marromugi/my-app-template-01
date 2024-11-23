import clsx from 'clsx'

import { TOAST_VARIANTS } from './const'
import { ToastProps } from './type'
import { Flex } from '../../layouts/utils/Flex'
import { Typography } from '../Typography'
import { XmarkIcon } from '../../icons'
import { Icon } from '../Icon'

export const Toast = ({
  theme = 'success',
  size = 'md',
  message,
  subMessage,
  isVisible = true,
  onClose = () => {}
}: ToastProps) => {
  return (
    <Flex
      gap={4}
      align={'center'}
      className={TOAST_VARIANTS({ theme, size, isVisible })}
    >
      <Flex direction={'column'} align={'center'} className={clsx('mg-flex-1')}>
        <p className={clsx('mg-text-xs mg-font-semibold', 'mg-text-white')}>
          {message}
        </p>
        {subMessage && (
          <Typography theme={'description'} size={'xs'}>
            {subMessage}
          </Typography>
        )}
      </Flex>
      <Flex
        center
        as={'button'}
        type={'button'}
        onClick={onClose}
        className={clsx('mg-size-10')}
      >
        <Icon icon={XmarkIcon} size={'sm'} theme={'fill'} />
      </Flex>
    </Flex>
  )
}
