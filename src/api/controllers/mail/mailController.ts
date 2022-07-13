import { Request, Response } from 'express'
import { Logger } from '../../utils/logger'
import notificationService from '../../services/mail.service'
import { Mail } from '../../interfaces/mail.interface'

class MailController {
  async sendEmail(req: Request, res: Response): Promise<void> {
    const logger = new Logger(process.env.APP_ID, req.baseUrl)
    const newUser: Mail = req.body
    const response = await notificationService.sendMail(
      newUser
    )
    const logMessage: string = response.error
      ? response.error.message
      : 'Send Mail succesfully'
    logger.add('Send mail', response.data, response.error, logMessage)

    if (response.error) {
      res.status(parseInt(response.error.status, 10)).json(response.error)
      return
    }
    res.json(response.data)
  } 
}

const mailController = new MailController()
export default mailController
