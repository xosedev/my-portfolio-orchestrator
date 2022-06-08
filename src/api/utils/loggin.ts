import logger from '../../common/logger'
import { DomainLogging } from '../interfaces/domainLoggin.interface'
import { Logging } from '../interfaces/logging.interfaces'
import { ServicesResponse } from '../interfaces/serviceResponse.interface'
import serviceUtils from './service.utils'

export class LoggingUtils {
  formattingServicesData(
    data: ServicesResponse,
    timer: [number, number],
    message
  ) {
    const domainLog = <DomainLogging>(<unknown>{
      domain: data.system,
      function: data.function,
      timeElapsed: serviceUtils.getTimeElapsed(timer),
      severity: 'INFO'
    })
    if (data.error) {
      domainLog.severity = 'ERROR'
      domainLog.message = JSON.stringify(data.error)
    }
    if (data.data) {
      domainLog.message = message
    }
    return domainLog
  }
  print(
    domainArray: any[],
    system: string,
    country: string,
    sessionKey: string,
    timer: [number, number],
    url: string,
    requestObject: object
  ) {
    const logToSend = <Logging>{
      system: system,
      country: country,
      sessionKey: sessionKey,
      url: url,
      domainsMessages: domainArray,
      request: requestObject,
      totalTime: serviceUtils.getTimeElapsed(timer)
    }
    logger.info(logToSend)
  }
}
export default new LoggingUtils()
