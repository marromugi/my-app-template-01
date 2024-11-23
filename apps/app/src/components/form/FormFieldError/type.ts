import type { FieldErrors, FieldValues, Path } from 'react-hook-form'

export type FormFieldErrorProps<T extends FieldValues> = {
  names: Path<T>[]
  errors?: FieldErrors<T>
}
