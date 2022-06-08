import express from 'express'
import actuator from 'express-actuator'
import path from 'path'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import routes from '../routes'

export const app = express()
const corsOptionsDelegate = (req, callback) => {
  const corsOptions = { origin: true }
  callback(null, corsOptions)
}

app.use(function (req, res, next) {
  res.removeHeader('x-powered-by')
  next()
})
const root = path.normalize(`${__dirname}/../..`)
app.set('appPath', `${root}client`)
app.use(cors(corsOptionsDelegate))
app.use(bodyParser.json({ limit: process.env.REQUEST_LIMIT || '100kb' }))
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: process.env.REQUEST_LIMIT || '100kb'
  })
)
app.use(bodyParser.text({ limit: process.env.REQUEST_LIMIT || '100kb' }))
app.use(cookieParser(process.env.SESSION_SECRET))
app.use(actuator())
app.use(express.static(`${root}/public`))

if (process.env.NODE_ENV != 'test') {
  app.use(morgan('combined'))
}

routes(app)
