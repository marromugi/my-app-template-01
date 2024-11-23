import { NextPageWithLayout } from 'next'
import { Flex } from '../../layouts/utils/Flex'
import { TextField } from '../../ui/TextField'
import { Typography } from '../../ui/Typography'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { useForm } from '../../../lib/hook-form'
import { loginSchema } from './schema'
import { FormFieldError } from '../../form/FormFieldError'
import { ROUTES } from '../../../const/route'
import { BaseLayout } from '../../layouts/BaseLayout'
import clsx from 'clsx'
import { useNotification } from '../../../hooks/useNotification'

export const LoginPage: NextPageWithLayout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({
    schema: loginSchema,
    defaultValues: {
      email: '',
      password: ''
    }
  })
  // const router = useRouter()

  const { notify } = useNotification()

  const onSubmit = handleSubmit(async () => {
    try {
    } catch {
      notify({
        theme: 'error',
        size: 'lg',
        message:
          'ログインできませんでした。メールアドレス・パスワードをご確認ください。'
      })
    }
  })

  // if (isLoadingMe) return <></>
  // if (me) {
  //   router.push(ROUTES.top)
  //   return <></>
  // }

  return (
    <Flex
      direction="column"
      gap={2}
      className={clsx('mg-p-4', 'mg-animate-fade-in')}
      as={'form'}
      onSubmit={onSubmit}
    >
      <Flex align={'center'} className={clsx('mg-mb-4')} direction="column">
        <Typography as="h1" size="2xl" weight="bold">
          LOGIN
        </Typography>
        <Typography as="span" size="sm" theme={'description'}>
          ログイン
        </Typography>
      </Flex>
      <TextField
        type="email"
        placeholder="メールアドレス"
        {...register('email')}
      />
      <FormFieldError names={['email']} errors={errors} />
      <TextField
        placeholder="パスワード（英数記号8文字以上）"
        type="password"
        {...register('password')}
      />
      <FormFieldError names={['password']} errors={errors} />
      <Button
        disabled={!isValid}
        onClick={onSubmit}
        // isLoading={isMutating}
        className={clsx('mg-mt-4')}
      >
        ログイン
      </Button>
      <Typography size="sm" as={'p'} className={clsx('mg-mt-4')}>
        アカウントをお持ちですか？
        <Typography as="span" theme={'link'}>
          <Link href={ROUTES.signup}>アカウント作成</Link>
        </Typography>
      </Typography>
    </Flex>
  )
}

LoginPage.layout = (page) => <BaseLayout>{page}</BaseLayout>
LoginPage.withAuth = false
