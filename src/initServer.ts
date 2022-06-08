
export default (async (): Promise<void> => {
  if (process.env.NODE_ENV != 'local')
  require('./index')
})().catch((error) => {
  console.log('Error loading env secret and variables')
  console.error(error)
})
