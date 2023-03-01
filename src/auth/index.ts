import hivePost from '../utils/hivePost.js'
import type { AuthGetTokenParams } from './types.js'

const createHiveAuth = (hiveURL: string) => {
  const props = {
    hiveURL,
    basePath: '/api/synxpass',
  }

  return {
    authGetToken(params: AuthGetTokenParams) {
      return hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/user/token`,
        body: JSON.stringify(params),
      })
    },
  }
}

export default createHiveAuth

export type { AuthGetTokenParams }
