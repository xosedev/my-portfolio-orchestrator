import './common/env'
import http from 'http'
import routes from './routes'
import { app } from './common/server'
import l from './common/logger'
import os from 'os'
import installValidator from './common/openapi'

let server
const welcome = (p: number) => (): void =>
  l.info(
    `up and running in ${
      process.env.NODE_ENV || 'development'
    } @: ${os.hostname()} on port: ${p}}`
  )

installValidator(app, routes).then(() => {
  const port = parseInt(process.env.PORT)
  server = http.createServer(app).listen(port, welcome(port))
})

export default server
