import { Error } from './error.interface'

export interface GenericResponse {
  error?: Error
  data?: any
}
