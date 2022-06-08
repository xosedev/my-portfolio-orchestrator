import { Request, Response } from 'express'
import { Logger } from '../../utils/logger'

class HealthController {
  async get(req: Request, res: Response): Promise<void> {
    const logger = new Logger(process.env.APP_ID, req.baseUrl)
    const logMessage = 'Health check bbtained succesfully'
    logger.add('Is Alive!',null, null, logMessage)
    res.status(200).json({ message: 'Service up' })
  }
}

const healthController = new HealthController()
export default healthController
