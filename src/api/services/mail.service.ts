
import { Mail } from '../interfaces/mail.interface'
import { GenericResponse } from '../interfaces/response.interface'
import mailAdapterUtils from '../utils/mailAdapterUtils'

class MailService {

  async sendMail(
    mail: Mail
  ): Promise<GenericResponse> {
    

    const genericResponse: GenericResponse = {}

    try {
      const response = await mailAdapterUtils.sendMail(
        mail
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
    return genericResponse
  }
}

const mailService = new MailService()
export default mailService
