import { NextPageWithLayout } from 'next'
import { BaseLayout } from '../../layouts/BaseLayout'

export const TopPage: NextPageWithLayout = () => {
  return <></>
}

TopPage.layout = (page) => <BaseLayout>{page}</BaseLayout>
TopPage.withAuth = true
