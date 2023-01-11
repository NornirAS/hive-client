import hivePost from '../utils/hivePost.js'

const createHiveService = (hiveURL: string) => {
  const props = {
    hiveURL,
    basePath: '/api/services',
  }

  return {
    async serviceGetAll(params: any) {
      const res = await hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}`,
        body: JSON.stringify(params),
      })
      return res
    },

    async serviceCreate(params: any) {
      const res = await hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/create`,
        body: JSON.stringify(params),
      })
      return res
    },

    async serviceUpdate(params: any) {
      const res = await hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/update`,
        body: JSON.stringify(params),
      })
      return res
    },

    async serviceRemove(params: any) {
      const res = await hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/remove`,
        body: JSON.stringify(params),
      })
      return res
    },

    async serviceAddLink(params: any) {
      const res = await hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/add-links`,
        body: JSON.stringify(params),
      })
      return res
    },

    async serviceRemoveLink(params: any) {
      const res = await hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/remove-links`,
        body: JSON.stringify(params),
      })
      return res
    },
  }
}

export default createHiveService
