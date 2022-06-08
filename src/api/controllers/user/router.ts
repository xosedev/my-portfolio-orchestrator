import express from 'express'
import userController from './userController'

export default express
  .Router()
  .post(
    '',
    userController.createUser
  )
