import express from 'express'
import mailController from './mailController'

export default express
  .Router()
  .post(
    '/send-mail',
    mailController.sendEmail
  )
