/**
 * Default error interface
 */
export interface Error {
  status: string
  message: string
  system?: string
  errors?: any[]
}
