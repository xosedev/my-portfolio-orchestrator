import { Error } from '../interfaces/error.interface'

class ServiceUtils {
  getTimeElapsed(start: [number, number]): number {
    const hrend = process.hrtime(start)
    return hrend[0] * 1000 + hrend[1] / 1000000
  }

  getErrorGenericResponse(
    message: string,
    status: string,
    system?: string,
    errors?: any[]
  ): Error {
    return {
      message,
      status,
      system,
      errors
    }
  }
}

export default new ServiceUtils()
