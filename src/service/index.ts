import hivePost from '../utils/hivePost.js'

const createHiveService = (hiveURL: string) => {
  const props = {
    hiveURL,
    basePath: '/api/services',
  }

  return {
    async serviceGetAll(params: { domains: string; rootDomain: string; token: string }) {
      const res = await hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}`,
        body: JSON.stringify(params),
      })
      return res
    },

    async serviceCreate(params: {
      rootDomain: string
      token: string
      username: string
      service: string
      authToken: string
      dataSchema: string
      timeout: string | number
      commandSchema?: string
      preScript?: string
      postScript?: string
    }) {
      const res = await hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/create`,
        body: JSON.stringify(params),
      })
      return res
    },

    async serviceUpdate(params: {
      rootDomain: string
      token: string
      service: string
      authToken: string
      dataSchema: string
      timeout: string | number
      commandSchema?: string
      preScript?: string
      postScript?: string
    }) {
      const res = await hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/update`,
        body: JSON.stringify(params),
      })
      return res
    },

    async serviceRemove(params: { domains: string; rootDomain: string; token: string; service: string }) {
      const res = await hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/remove`,
        body: JSON.stringify(params),
      })
      return res
    },

    async serviceLinks(params: { domains: string; rootDomain: string; token: string; service: string }) {
      const res = await hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/links`,
        body: JSON.stringify(params),
      })
      return res
    },

    async serviceLinksUpdate(params: {
      domains: string
      rootDomain: string
      token: string
      service: string
      links: string[]
    }) {
      const res = await hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/links/update`,
        body: JSON.stringify(params),
      })
      return res
    },

    async serviceGhostsAdd(params: {
      domains: string
      rootDomain: string
      token: string
      service: string
      quantity: string | number
    }) {
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
