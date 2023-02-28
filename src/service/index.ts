import hivePost from '../utils/hivePost.js'
import type {
  ServiceCreate,
  ServiceDelete,
  ServiceGetAll,
  ServiceGhostAdd,
  ServiceLinks,
  ServiceLinksUpdate,
  ServiceUpdate,
} from './types.js'

const createHiveService = (hiveURL: string) => {
  const props = {
    hiveURL,
    basePath: '/api/services',
  }

  return {
    serviceGetAll(params: ServiceGetAll) {
      return hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}`,
        body: JSON.stringify(params),
      })
    },

    serviceCreate(params: ServiceCreate) {
      return hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/create`,
        body: JSON.stringify(params),
      })
    },

    serviceUpdate(params: ServiceUpdate) {
      return hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/update`,
        body: JSON.stringify(params),
      })
    },

    serviceRemove(params: ServiceDelete) {
      return hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/remove`,
        body: JSON.stringify(params),
      })
    },

    serviceLinks(params: ServiceLinks) {
      return hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/links`,
        body: JSON.stringify(params),
      })
    },

    serviceLinksUpdate(params: ServiceLinksUpdate) {
      return hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/links/update`,
        body: JSON.stringify(params),
      })
    },

    serviceGhostsAdd(params: ServiceGhostAdd) {
      return hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/ghosts/add`,
        body: JSON.stringify(params),
      })
    },
  }
}

export default createHiveService

export { ServiceCreate, ServiceDelete, ServiceGetAll, ServiceGhostAdd, ServiceLinks, ServiceLinksUpdate, ServiceUpdate }
