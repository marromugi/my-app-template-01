import { AuthorizationProps } from './type'
import { useRouter } from 'next/router'
import { ROUTES } from '@/const/route'

export const Authorization = ({ children, enabled }: AuthorizationProps) => {
  const router = useRouter()
  const { data, isLoading } = {
    data: {},
    isLoading: false
  }

  // 既にログイン済みでトップに遷移した場合
  if (data && router.pathname === ROUTES.login) {
    router.replace(ROUTES.top)
    return <></>
  }

  // 認証なし
  if (!enabled) {
    return children
  }

  // 以降認証あり
  if (isLoading || !router.isReady) {
    return <></>
  }

  if (!data) {
    router.replace(ROUTES.login)
    return <></>
  }

  return children
}
