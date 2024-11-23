/* eslint-disable @typescript-eslint/no-explicit-any */
import { ClientResponse } from 'hono/client'
import { StatusCode, SuccessStatusCode } from 'hono/utils/http-status'
import useSWR, { SWRConfiguration, useSWRConfig } from 'swr'
import useSWRMutation, { SWRMutationConfiguration } from 'swr/mutation'

import { SUCCESS_STATUS_CODES } from './const'

import type { ClientRequestOptions } from 'hono'

type Request = (
  args: any,
  options?: ClientRequestOptions
) => Promise<ClientResponse<any>>

type GetRequestClient = {
  $get: (
    args: any,
    options?: ClientRequestOptions
  ) => Promise<ClientResponse<any>>
  $url: (args: any) => URL
}

export type ApiParameters<T extends Request> = Parameters<T>[0]
export type ApiResponse<
  T extends Request,
  C extends StatusCode = StatusCode
> = Awaited<ReturnType<T>> extends infer U
  ? U extends { status: C }
    ? U
    : never
  : never
export type ApiResponseContent<
  T extends Request,
  C extends StatusCode = SuccessStatusCode
> = Awaited<ReturnType<T>> extends infer U
  ? U extends { status: C }
    ? U extends {
        json: () => Promise<infer A>
      }
      ? A
      : never
    : never
  : never

// type B = ApiParameters<typeof client.api.login.$post>
// type BB = ApiResponse<typeof client.api.login.$post>
// type BBB = ApiResponseContent<typeof client.api.login.$post>

export const useQuery = <T extends GetRequestClient>(
  client: T,
  args: ApiParameters<T['$get']> & { key?: string },
  options?: {
    swr?: SWRConfiguration<
      ApiResponseContent<T['$get']>,
      ApiResponse<T['$get'], Exclude<StatusCode, SuccessStatusCode>>
    >
    fetch?: ClientRequestOptions<ApiResponseContent<T['$get']>>
    enabled?: boolean
  }
) => {
  return useSWR(
    typeof options?.enabled === 'boolean' && options.enabled === false
      ? null
      : `${client.$url(args)}${JSON.stringify(args)}`,
    async () => {
      try {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { key, ...params } = args
        const res = await client.$get(params, options?.fetch)

        if (!SUCCESS_STATUS_CODES.includes(res.status)) {
          throw res
        }

        return (await res.json()) as ApiResponseContent<T['$get']>
      } catch (e) {
        if (e instanceof Response) {
          throw e
        } else {
          // TODO: Sentryなどでのエラー監視
          console.error(e)
          throw new Response(null, { status: -1 })
        }
      }
    },
    {
      revalidateIfStale: true,
      revalidateOnFocus: false,
      revalidateOnMount: true,
      revalidateOnReconnect: false,
      errorRetryCount: 0,
      ...options?.swr
    }
  )
}

export const useMutation = <T extends Request>(
  client: T,
  args: { key?: string },
  options?: {
    swr?: SWRMutationConfiguration<
      ApiResponseContent<T, SuccessStatusCode>,
      ApiResponse<T, Exclude<StatusCode, SuccessStatusCode>>
    >
    fetch?: ClientRequestOptions<ApiResponseContent<T>>
  }
) => {
  return useSWRMutation(
    JSON.stringify(client.name),
    async (_: any, { arg }: { arg: ApiParameters<T> }) => {
      try {
        const res = await client(arg, options?.fetch)

        if (SUCCESS_STATUS_CODES.includes(res.status)) {
          return (await res.json()) as ApiResponseContent<T>
        } else {
          throw res
        }
      } catch (e) {
        if (e instanceof Response) {
          throw e
        } else {
          // TODO: Sentryなどでのエラー監視
          console.error(e)
          throw new Response(null, { status: 500 })
        }
      }
    },
    options?.swr
  )
}

export const useInvalidate = <T extends GetRequestClient>(client: T) => {
  const { mutate } = useSWRConfig()
  const invalidate = async (args: ApiParameters<T['$get']>) => {
    await mutate(`${client.$url(args)}${JSON.stringify(args)}`)
  }

  return invalidate
}
