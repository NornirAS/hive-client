import hivePost from '../utils/hivePost.js'

const createHiveDomain = (hiveURL: string) => {
  const props = {
    hiveURL,
    basePath: '/api/domains',
  }

  return {
    domainGetAll(params: { rootDomain: string; token: string; username: string }) {
      return hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}`,
        body: JSON.stringify(params),
      })
    },

    domainCreate(params: { domain: string; rootDomain: string; token: string; username: string }) {
      return hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/create`,
        body: JSON.stringify(params),
      })
    },

    domainDelete(params: { domain: string; rootDomain: string; token: string; username: string }) {
      return hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/delete`,
        body: JSON.stringify(params),
      })
    },

    domainActivate(params: { domain: string; rootDomain: string; token: string; username: string; authToken: string }) {
      return hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/activate`,
        body: JSON.stringify(params),
      })
    },

    domainDeactivate(params: {
      domain: string
      rootDomain: string
      token: string
      username: string
      authToken: string
    }) {
      return hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/deactivate`,
        body: JSON.stringify(params),
      })
    },
  }
}

export default createHiveDomain
