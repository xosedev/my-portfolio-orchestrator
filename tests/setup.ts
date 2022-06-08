import dotenv from 'dotenv'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
dotenv.config({ path: `${__dirname}/ci.env` })

const baseEndpoint = process.env.API_ADAPTER

jest.setTimeout(1 * 60 * 1000)

const server = setupServer(
  rest.get(`${baseEndpoint}/api/v1/healthcheck`, async (req, res, ctx) => {
    return res(ctx.status(500))
  }),
)

beforeAll(async () => {
  server.listen({ onUnhandledRequest: 'bypass' })
})
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

export { server, rest, baseEndpoint }
