import '@/styles/globals.css'
import type { AppPropsWithLayout } from 'next/app'
import { Toaster } from 'react-hot-toast'
import { Authorization } from '@/components/features/auth/Authorization'

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.layout ?? ((page) => page)
  return (
    <>
      <Toaster
        position={'bottom-left'}
        containerStyle={{ inset: '1rem 0.5rem' }}
      />
      <Authorization
        enabled={typeof Component.withAuth !== 'boolean' || Component.withAuth}
      >
        {getLayout(<Component {...pageProps} />)}
      </Authorization>
    </>
  )
}
