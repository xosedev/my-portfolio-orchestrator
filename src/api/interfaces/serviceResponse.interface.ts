import { Error } from './error.interface'
/**
 * Data to log some responses from domains
 */

export interface ServicesResponse {
  system: string
  function: string
  data?: object
  error?: Error
}
