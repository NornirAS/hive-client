import hivePost from '../utils/hivePost.js'
import type {
  DomainGetAllParams,
  DomainCreateParams,
  DomainDeleteParams,
  DomainActivateParams,
  DomainDeactivateParams,
} from './types.js'

const createHiveDomain = (hiveURL: string) => {
  const props = {
    hiveURL,
    basePath: '/api/domains',
  }

  return {
    domainGetAll(params: DomainGetAllParams) {
      return hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}`,
        body: JSON.stringify(params),
      })
    },

    domainCreate(params: DomainCreateParams) {
      return hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/create`,
        body: JSON.stringify(params),
      })
    },

    domainDelete(params: DomainDeleteParams) {
      return hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/delete`,
        body: JSON.stringify(params),
      })
    },

    domainActivate(params: DomainActivateParams) {
      return hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/activate`,
        body: JSON.stringify(params),
      })
    },

    domainDeactivate(params: DomainDeactivateParams) {
      return hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/deactivate`,
        body: JSON.stringify(params),
      })
    },
  }
}

export default createHiveDomain

export { DomainGetAllParams, DomainCreateParams, DomainDeleteParams, DomainActivateParams, DomainDeactivateParams }
