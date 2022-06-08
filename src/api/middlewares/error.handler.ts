import { Request, Response, NextFunction } from 'express'
import logger from '../../common/logger'
import { Message } from '../interfaces/logging.interfaces'

export default function errorHandler(
  err,
  req: Request,
  res: Response,
  _next: NextFunction
) {
  const logInfo: Message = {
    method: 'errorHandler',
    message: `${err.status} - ${err.message}`,
    callId: req.query.session_id,
    timeElapsed: 0,
    country: req.params.country,
    severity: 'ERROR'
  }
  logger.error(logInfo)
  res
    .status(err.status || 500)
    .json({ status: false, errorMessage: err.message })
}
