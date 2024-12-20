import type { NextPage, NextPageWithLayout } from 'next'
import type { AppProps } from 'next/app'
import type { ReactElement } from 'react'

declare module 'next' {
  type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
    layout?: (page: ReactElement) => ReactElement
    withAuth?: boolean
  }
}

declare module 'next/app' {
  type AppPropsWithLayout<P = object> = AppProps<P> & {
    Component: NextPageWithLayout<P>
  }
}
