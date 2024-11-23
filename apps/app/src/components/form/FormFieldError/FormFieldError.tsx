import { FieldValues } from 'react-hook-form'
import type { FormFieldErrorProps } from './type'
import { Typography } from '@/components/ui/Typography'
import { Flex } from '@/components/layouts/utils/Flex'

export const FormFieldError = <T extends FieldValues>({
  names,
  errors
}: FormFieldErrorProps<T>) => {
  return (
    <Flex direction="column" gap={1}>
      {names.map((name) => (
        <>
          {errors && errors[name] && (
            <Typography
              as={'p'}
              size={'sm'}
              theme={'alert'}
              className={'mg-font-medium'}
            >
              {errors[name]?.message?.toString()}
            </Typography>
          )}
        </>
      ))}
    </Flex>
  )
}
