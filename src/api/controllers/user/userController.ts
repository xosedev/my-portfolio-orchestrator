import { Request, Response } from 'express'
import { Logger } from '../../utils/logger'
import notificationService from '../../services/notification.service'
import { User } from '../../model/user.interface'

class UserController {
  async createUser(req: Request, res: Response): Promise<void> {
    const logger = new Logger(process.env.APP_ID, req.baseUrl)
    const newUser: User = req.body
    const response = await notificationService.createUser(
      newUser
    )
    const logMessage: string = response.error
      ? response.error.message
      : 'User Create succesfully'
    logger.add('Post user', response.data, response.error, logMessage)

    if (response.error) {
      res.status(parseInt(response.error.status, 10)).json(response.error)
      return
    }
    res.json(response.data)
  } 
}

const userController = new UserController()
export default userController
