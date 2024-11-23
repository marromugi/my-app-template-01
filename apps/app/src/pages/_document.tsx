import clsx from 'clsx'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ja" className="dark mg-overscroll-none">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <meta name="theme-color" content="#FFFFFF" />
      </Head>
      <body
        className={clsx(
          'antialiased [&>div]:mg-h-dvh [&>div]:mg-w-screen',
          '[&>div]:mg-flex [&>div]:mg-flex-col',
          '[&>div]:mg-overscroll-none mg-overscroll-none'
        )}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
