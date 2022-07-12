import './common/env'
import https from 'https'
import routes from './routes'
import { app } from './common/server'
import l from './common/logger'
import os from 'os'
import fs from 'fs'
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
  const options = {
    key: fs.readFileSync(__dirname + '/keys/privkey.pem'),
    cert: fs.readFileSync(__dirname + '/keys/fullchain.pem')
  }
  server = https.createServer(options, app).listen(port, welcome(port))
})

export default server
