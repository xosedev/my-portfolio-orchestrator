import loggin from './loggin'
import { ServicesResponse } from '../interfaces/serviceResponse.interface'
import { v4 as uuid } from 'uuid'

export class Logger {
  domainLoggingArray: any[]
  system: string
  route: string
  public sessionKey: string
  public timer: any

  constructor(system, route) {
    this.domainLoggingArray = []
    this.system = system
    this.route = route
    this.sessionKey = uuid()
    this.timer = process.hrtime()
  }

  add(functionName: string, data: object, error, message: string) {
    const serviceRequest: ServicesResponse = {
      system: this.system,
      function: functionName,
      data: data,
      error: error
    }
    this.domainLoggingArray.push(
      loggin.formattingServicesData(serviceRequest, this.timer, message)
    )
  }
  print(country, request) {
    loggin.print(
      this.domainLoggingArray,
      this.system,
      country,
      this.sessionKey,
      this.timer,
      this.route,
      request
    )
  }
}
