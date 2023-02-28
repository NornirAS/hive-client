import hivePost from '../utils/hivePost.js'
import type { AuthGetToken } from './types.js'

const createHiveAuth = (hiveURL: string) => {
  const props = {
    hiveURL,
    basePath: '/api/synxpass',
  }

  return {
    authGetToken(params: AuthGetToken) {
      return hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/get-token`,
        body: JSON.stringify(params),
      })
    },
  }
}

export default createHiveAuth

export { AuthGetToken }
