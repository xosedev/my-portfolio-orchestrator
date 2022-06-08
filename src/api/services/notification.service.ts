import { User } from '../model/user.interface'
import { GenericResponse } from '../interfaces/response.interface'
import notificationAdapterUtils from '../utils/notificationAdapterUtils'

class UserService {

  async createUser(
    newUser: User,
    country: string,
    store: string
  ): Promise<GenericResponse> {
    const genericResponse: GenericResponse = {}

    try {
      const response = await notificationAdapterUtils.createUser(
        newUser,
        country,
        store
      )
      genericResponse.data = response
    } catch (error) {
      genericResponse.error = {
        message: error.message,
        status: '500',
        system: 'ORCHESTRATOR ERROR'
      }
    }

    return genericResponse
  }
}

const userService = new UserService()
export default userService
