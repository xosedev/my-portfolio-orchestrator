import { NextFunction, Request, Response } from 'express'
import errorHandler from '../../../src/api/middlewares/error.handler'

describe('Error handler middleware', () => {
  let mockRequest: Partial<Request>
  let mockResponse: Partial<Response>
  let error
  const nextFunction: NextFunction = jest.fn()

  beforeEach(() => {
    mockRequest = {
      params: {
        country: 'CL'
      },
      query: {
        session_id: '246274-234234-234324'
      }
    }
    mockResponse = {
      json: jest.fn().mockReturnValue({ status: jest.fn() }),
      status: jest.fn().mockReturnValue({ json: jest.fn() })
    }
    error = {
      status: 500,
      message: 'Error testing middleware'
    }
  })

  test('without headers', async () => {
    const expectedResponse = {
      status: false,
      errorMessage: 'Error testing middleware'
    }
    errorHandler(
      error,
      mockRequest as Request,
      mockResponse as Response,
      nextFunction
    )

    expect(mockResponse.status).toBeCalledWith(error.status)
  })
  test('without headers and without error status', async () => {
    const expectedResponse = {
      status: false,
      errorMessage: 'Error testing middleware'
    }
    errorHandler(
      { ...error, status: undefined },
      mockRequest as Request,
      mockResponse as Response,
      nextFunction
    )

    expect(mockResponse.status).toBeCalledWith(error.status)
  })
})
