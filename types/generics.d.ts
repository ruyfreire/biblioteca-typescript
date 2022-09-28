import { ToastProps } from 'ui-app'

export type ErrorsApi = any

export type AlertProps = {
  show?: boolean
  /** segundos */
  timer?: number
  children: string
  variant?: ToastProps['variant']
}

export type GenericState = {
  apiErrors: Array<ErrorsApi>
  alert: AlertProps
}
