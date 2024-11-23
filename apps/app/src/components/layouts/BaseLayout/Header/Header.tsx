import Link from 'next/link'
import { Flex } from '../../utils/Flex'
import { ROUTES } from '../../../../const/route'
import { Typography } from '../../../ui/Typography'
import clsx from 'clsx'

export const Header = () => {
  return (
    <Flex
      as={'header'}
      justify={'between'}
      align={'center'}
      className={clsx(
        'mg-p-4 mg-bg-white',
        'mg-sticky mg-top-0 mg-z-header',
        'mg-shadow-sm'
      )}
    >
      <Link href={ROUTES.top}>
        <Typography as="h1" size="xl" weight="bold">
          MyApp
        </Typography>
      </Link>
    </Flex>
  )
}
