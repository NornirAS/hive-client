import hivePost from '../utils/hivePost.js'

const createHiveDomain = (hiveURL: string) => {
  const props = {
    hiveURL,
    basePath: '/api/domains',
  }

  return {
    async domainGetAll(params: { rootDomain: string; token: string; username: string }) {
      const res = await hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}`,
        body: JSON.stringify(params),
      })
      return res
    },

    async domainCreate(params: { domain: string; rootDomain: string; token: string; username: string }) {
      const res = await hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/create`,
        body: JSON.stringify(params),
      })
      return res
    },

    async domainDelete(params: { domain: string; rootDomain: string; token: string; username: string }) {
      const res = await hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/delete`,
        body: JSON.stringify(params),
      })
      return res
    },

    async domainActivate(params: {
      domain: string
      rootDomain: string
      token: string
      username: string
      authToken: string
    }) {
      const res = await hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/activate`,
        body: JSON.stringify(params),
      })
      return res
    },

    async domainDeactivate(params: {
      domain: string
      rootDomain: string
      token: string
      username: string
      authToken: string
    }) {
      const res = await hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/deactivate`,
        body: JSON.stringify(params),
      })
      return res
    },
  }
}

export default createHiveDomain
