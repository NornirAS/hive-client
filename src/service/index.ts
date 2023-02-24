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

    async serviceLinks(params: any) {
      const res = await hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/links`,
        body: JSON.stringify(params),
      })
      return res
    },

    async serviceLinksUpdate(params: any) {
      const res = await hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/links/update`,
        body: JSON.stringify(params),
      })
      return res
    },

    async serviceGhostsAdd(params: any) {
      const res = await hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/ghosts/add`,
        body: JSON.stringify(params),
      })
      return res
    },
  }
}

export default createHiveService
