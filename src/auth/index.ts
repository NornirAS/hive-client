import hivePost from '../utils/hivePost.js'

const createHiveAuth = (hiveURL: string) => {
  const props = {
    hiveURL,
    basePath: '/api/synxpass',
  }

  return {
    authGetToken(params: { username: string; password: string }) {
      return hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/get-token`,
        body: JSON.stringify(params),
      })
    },
  }
}

export default createHiveAuth
