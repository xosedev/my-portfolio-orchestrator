import express from 'express'
import generalController from './healthController'
export default express.Router().get('', generalController.get)
