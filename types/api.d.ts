type CodeSuccess = 'success'
type CodeValidation = 'error.validation'
type CodeNotFound = 'error.notFound'
type CodeInternalError = 'error.internal'
type CodeDatabaseError =
  | 'error.database.internal'
  | 'error.database.unique'
  | 'error.database.notFound'
  | 'error.database.validation'

type DataError = Array<string | object>

export type ResponseApi200<Type = undefined> = {
  code: CodeSuccess
  message: string
  data?: Type | DataError | CodeDatabaseError
}

export type ResponseApi201<Type = undefined> = {
  code: CodeSuccess
  message: string
  data?: Type | DataError | CodeDatabaseError
}

export type ResponseApi400<Type = undefined> = {
  code: CodeValidation
  message: string
  data?: Type | DataError | CodeDatabaseError
}

export type ResponseApi404<Type = undefined> = {
  code: CodeNotFound
  message: string
  data?: Type | DataError | CodeDatabaseError
}

export type ErrorAPI = {
  id_error: string
  code: CodeInternalError
  status: number
  message: string
  data: string
}
