import { NextPageWithLayout } from 'next'
import { Flex } from '../../layouts/utils/Flex'
import { TextField } from '../../ui/TextField'
import { Typography } from '../../ui/Typography'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { useForm } from '../../../lib/hook-form'
import { signupSchema } from './schema'
import { FormFieldError } from '../../form/FormFieldError'
import { ROUTES } from '../../../const/route'
import clsx from 'clsx'
import { BaseLayout } from '../../layouts/BaseLayout'
import { useNotification } from '../../../hooks/useNotification'
import { useRouter } from 'next/router'

export const SignupPage: NextPageWithLayout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({
    schema: signupSchema,
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  })
  // const { data: me, isLoading: isLoadingMe } = useQuery(
  //   client.api.me,
  //   {},
  //   {
  //     swr: {
  //       shouldRetryOnError: false
  //     }
  //   }
  // )
  const { notify } = useNotification()
  const router = useRouter()

  // const { trigger, isMutating } = useMutation(client.api.register.$post, {})

  const onSubmit = handleSubmit(async () => {
    try {
      // TODO: ユーザー登録APIを叩く
      notify({
        theme: 'success',
        message: 'ユーザー登録が完了しました。'
      })
      router.push(ROUTES.login)
    } catch {
      notify({
        theme: 'error',
        message:
          'ユーザー登録できませんでした。メールアドレスもしくはパスワードが不正な値です。'
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
          SIGNUP
        </Typography>
        <Typography as="span" size="sm" theme={'description'}>
          ユーザー登録
        </Typography>
      </Flex>
      <TextField placeholder="ユーザー名" {...register('name')} />
      <FormFieldError names={['name']} errors={errors} />
      <TextField placeholder="メールアドレス" {...register('email')} />
      <FormFieldError names={['email']} errors={errors} />
      <TextField
        placeholder="パスワード（英数記号8文字以上）"
        {...register('password')}
      />
      <FormFieldError names={['password']} errors={errors} />
      <Button
        disabled={!isValid}
        onClick={onSubmit}
        // isLoading={isMutating}
        className={clsx('mg-mt-4')}
      >
        アカウントを作成
      </Button>
      <Typography as={'p'} size={'sm'} className={clsx('mg-mt-4')}>
        既にアカウントをお持ちですか？
        <Typography as="span" theme={'link'}>
          <Link href={ROUTES.login}>ログイン</Link>
        </Typography>
      </Typography>
    </Flex>
  )
}

SignupPage.layout = (page) => <BaseLayout>{page}</BaseLayout>
SignupPage.withAuth = false
