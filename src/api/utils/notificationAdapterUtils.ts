import { User } from '../model/user.interface'
import axios from 'axios'
const apiEndpoint = process.env.API_ADAPTER

class UserAdapterUtils {
  private getHeaders() {
    return {
      'Content-type': 'application/json',
    }
  }

  async createUser(
    newUser: User,
    country: string,
    store: string
  ): Promise<any> {
    return axios
      .post(
        `${apiEndpoint}/api/v1/user/`,
        newUser,
        {
          headers: this.getHeaders()
        }
      )
      .then((res) => {
        return res.data
      })
      .catch((err) => {
        console.warn(err)
        throw err
      })
  }
}

export default new UserAdapterUtils()
