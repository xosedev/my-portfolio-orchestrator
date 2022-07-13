import { Application } from 'express'
import generalController from './api/controllers/general/router'
import mailRouter from './api/controllers/mail/router'

export default function routes(app: Application): void {
  app.use('/api/v3/mail', mailRouter)
  app.use('/api/v3/healthcheck', generalController)
}
