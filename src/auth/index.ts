import hivePost from '../utils/hivePost.js'

const createHiveAuth = (hiveURL: string) => {
  const props = {
    hiveURL,
    basePath: '/api/synxpass',
  }

  return {
    async authGetToken(params: any) {
      const res = await hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/get-token`,
        body: JSON.stringify(params),
      })
      return res
    },
  }
}

export default createHiveAuth
