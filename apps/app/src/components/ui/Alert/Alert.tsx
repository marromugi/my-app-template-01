import clsx from 'clsx'
import { AlertProps } from './type'
import { Flex } from '../../layouts/utils/Flex'
import { ALERT_VARIANTS } from './const'
import { Typography } from '../Typography'

export const Alert = ({ theme, children, className, ...props }: AlertProps) => {
  return (
    <Flex {...props} className={clsx(ALERT_VARIANTS({ theme }), className)}>
      <Typography
        as={'p'}
        size={'xs'}
        className={clsx('mg-whitespace-pre-wrap')}
      >
        {children}
      </Typography>
    </Flex>
  )
}
