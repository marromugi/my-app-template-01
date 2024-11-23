import { zodResolver } from '@hookform/resolvers/zod'
import { useForm as useBaseForm } from 'react-hook-form'

import type {
  DefaultValues,
  UseFormProps as UseBaseFormProps
} from 'react-hook-form'
import type { z } from 'zod'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type UseFormProps<T extends z.Schema<any, any>> = Omit<
  UseBaseFormProps<T>,
  'resolver' | 'context' | 'defaultValues'
> & {
  schema: T
  defaultValues?: DefaultValues<z.infer<T>>
  values?: z.infer<T>
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useForm = <T extends z.Schema<any, any>>({
  schema,
  ...props
}: UseFormProps<T>) => {
  return useBaseForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
    ...props
  })
}
