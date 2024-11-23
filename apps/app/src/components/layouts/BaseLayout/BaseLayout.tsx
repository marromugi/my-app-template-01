import { Header } from './Header'

export const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
