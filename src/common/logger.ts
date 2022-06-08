import pino from 'pino'

const logs = pino({
  name: process.env.APP_ID,
  level: process.env.LOG_LEVEL,
  enabled: process.env.NODE_ENV != 'test'
})

export default logs
