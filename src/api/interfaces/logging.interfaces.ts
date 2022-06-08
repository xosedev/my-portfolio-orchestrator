import { DomainLogging } from './domainLoggin.interface'

/**
 *  Data to log all the data
 */
export interface Logging {
  system: string
  country: string
  sessionKey: string
  request: object
  url: string
  domainsMessages: DomainLogging[]
  totalTime: number
}

export interface Message {
  message: string
  callId: string | any
  timeElapsed: number
  country: string
  severity: string
  method: string
}
