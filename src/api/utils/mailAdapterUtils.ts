import axios from 'axios'
import { Mail } from '../interfaces/mail.interface'
const apiMailEndpoint = process.env.API_MAIL_ADAPTER

class MailAdapterUtils {
  private getHeaders() {
    return {
      'Content-type': 'application/json',
    }
  }

  async sendMail(
    mail: Mail
  ): Promise<any> {
    return axios
      .post(
        `${apiMailEndpoint}/send-mail`,
        mail,
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

export default new MailAdapterUtils()
