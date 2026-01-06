import { RegisterAndLoginUserScheme } from './schemes/RegisterAndLoginUserScheme.js'
import { TransactionScheme } from './schemes/TransactionScheme.js'
import { CategoryScheme } from './schemes/CategoryScheme.js'

import * as z from 'zod'

export enum HttpCodes {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  NOT_MODIFIED = 304,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  TOO_MANY_REQUESTS = 429,
  INTERNAL_SERVER_ERROR = 500
}

export type CreateAndLoginUserDTO = z.infer<typeof RegisterAndLoginUserScheme>

export type CategoryDTO = z.infer<typeof CategoryScheme>

export type TransactionDTO = z.infer<typeof TransactionScheme>

export type PayloadAuth = {
  id: number
  email: string
}
