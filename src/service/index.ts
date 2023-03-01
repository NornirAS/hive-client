import hivePost from '../utils/hivePost.js'
import type {
  ServiceCreateParams,
  ServiceDeleteParams,
  ServiceGetAllParams,
  ServiceGhostAddParams,
  ServiceLinksParams,
  ServiceLinksUpdateParams,
  ServiceUpdateParams,
} from './types.js'

const useHiveService = (hiveURL: string) => {
  const props = {
    hiveURL,
    basePath: '/api/services',
  }

  return {
    serviceGetAll(params: ServiceGetAllParams) {
      return hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}`,
        body: JSON.stringify(params),
      })
    },

    serviceCreate(params: ServiceCreateParams) {
      return hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/create`,
        body: JSON.stringify(params),
      })
    },

    serviceUpdate(params: ServiceUpdateParams) {
      return hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/update`,
        body: JSON.stringify(params),
      })
    },

    serviceRemove(params: ServiceDeleteParams) {
      return hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/remove`,
        body: JSON.stringify(params),
      })
    },

    serviceLinks(params: ServiceLinksParams) {
      return hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/links`,
        body: JSON.stringify(params),
      })
    },

    serviceLinksUpdate(params: ServiceLinksUpdateParams) {
      return hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/links/update`,
        body: JSON.stringify(params),
      })
    },

    serviceGhostsAdd(params: ServiceGhostAddParams) {
      return hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/ghosts/add`,
        body: JSON.stringify(params),
      })
    },
  }
}

export default useHiveService

export type {
  ServiceCreateParams,
  ServiceDeleteParams,
  ServiceGetAllParams,
  ServiceGhostAddParams,
  ServiceLinksParams,
  ServiceLinksUpdateParams,
  ServiceUpdateParams,
}
