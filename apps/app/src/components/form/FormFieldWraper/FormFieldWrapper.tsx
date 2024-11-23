import clsx from 'clsx'

import {
  FORM_FIELD_WRAPPER_DESCRIPTION_VARIANTS,
  FORM_FIELD_WRAPPER_LABEL_VARIANTS,
  FORM_FIELD_WRAPPER_VARIANTS
} from './const'

import type { FormFieldWrapperProps } from './type'
import type { FieldValues } from 'react-hook-form'
import { Typography } from '../../ui/Typography'

export const FormFieldWrapper = <T extends FieldValues>({
  names,
  errors,
  label,
  description,
  direction,
  size = 'xs',
  required,
  className,
  labelClassName,
  showLabel = true,
  showRequired = false,
  children
}: FormFieldWrapperProps<T>) => {
  return (
    <>
      <div
        className={clsx(
          FORM_FIELD_WRAPPER_VARIANTS({ direction }),
          className
        )}
      >
        {showLabel && (
          <div className={clsx('mg-flex mg-items-center mg-gap-2')}>
            <span
              className={clsx(
                FORM_FIELD_WRAPPER_LABEL_VARIANTS({ size }),
                labelClassName
              )}
            >
              {label}
            </span>
            {required && showRequired && (
              <Typography
                as={'span'}
                size={'xs'}
                theme={'fill'}
                className={clsx(
                  'mg-rounded-full mg-bg-red-600 mg-px-4 mg-font-bold'
                )}
              >
                必須
              </Typography>
            )}
          </div>
        )}
        {description && (
          <p
            className={clsx(FORM_FIELD_WRAPPER_DESCRIPTION_VARIANTS())}
          >
            {description}
          </p>
        )}
        {children}
        {names.map((name) => (
          <>
            {errors && errors[name] && (
              <Typography as={'p'} size={'sm'} theme={'disabled'}>
                {errors[name]?.message?.toString()}
              </Typography>
            )}
          </>
        ))}
      </div>
    </>
  )
}
