import hivePost from '../utils/hivePost.js'

const createHiveService = (hiveURL: string) => {
  const props = {
    hiveURL,
    basePath: '/api/services',
  }

  return {
    serviceGetAll(params: { domains: string; rootDomain: string; token: string }) {
      return hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}`,
        body: JSON.stringify(params),
      })
    },

    serviceCreate(params: {
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
      return hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/create`,
        body: JSON.stringify(params),
      })
    },

    serviceUpdate(params: {
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
      return hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/update`,
        body: JSON.stringify(params),
      })
    },

    serviceRemove(params: { domains: string; rootDomain: string; token: string; service: string }) {
      return hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/remove`,
        body: JSON.stringify(params),
      })
    },

    serviceLinks(params: { domains: string; rootDomain: string; token: string; service: string }) {
      return hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/links`,
        body: JSON.stringify(params),
      })
    },

    serviceLinksUpdate(params: {
      domains: string
      rootDomain: string
      token: string
      service: string
      links: string[]
    }) {
      return hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/links/update`,
        body: JSON.stringify(params),
      })
    },

    serviceGhostsAdd(params: {
      domains: string
      rootDomain: string
      token: string
      service: string
      quantity: string | number
    }) {
      return hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/ghosts/add`,
        body: JSON.stringify(params),
      })
    },
  }
}

export default createHiveService
