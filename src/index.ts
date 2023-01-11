import createHiveAuth from './auth/index.js'
import createHiveDomain from './domain/index.js'
import createHiveService from './service/index.js'
import createHiveGhost from './ghost/index.js'

const createHiveClient = (hiveURL: string) => ({
  ...createHiveAuth(hiveURL),
  ...createHiveDomain(hiveURL),
  ...createHiveService(hiveURL),
  ...createHiveGhost(hiveURL),
})

export default createHiveClient
