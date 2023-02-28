import hivePost from '../utils/hivePost.js'

const createHiveGhost = (hiveURL: string) => {
  const props = {
    hiveURL,
    basePath: '/api/ghosts',
  }

  return {
    ghostGetAll(params: { domain: string; rootDomain: string; token: string }) {
      return hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}`,
        body: JSON.stringify(params),
      })
    },

    ghostDelete(params: { domain: string; rootDomain: string; token: string; service: string; ghostID: string }) {
      return hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/delete`,
        body: JSON.stringify(params),
      })
    },

    ghostGetPending(params: { domain: string; rootDomain: string; token: string; service: string; username: string }) {
      return hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/pending`,
        body: JSON.stringify(params),
      })
    },

    ghostAcceptPending(params: {
      domain: string
      rootDomain: string
      token: string
      service: string
      username: string
      ghostID: string
    }) {
      return hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/pending/accept`,
        body: JSON.stringify(params),
      })
    },

    ghostRejectPending(params: {
      domain: string
      rootDomain: string
      token: string
      service: string
      username: string
      ghostID: string
    }) {
      return hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/pending/reject`,
        body: JSON.stringify(params),
      })
    },

    ghostAddMapID(params: {
      domain: string
      rootDomain: string
      token: string
      service: string
      mapID: string
      ghostID: string
    }) {
      return hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/map-id/add`,
        body: JSON.stringify(params),
      })
    },

    ghostGenerateMapID(params: {
      domain: string
      rootDomain: string
      token: string
      service: string
      ghostID: string
    }) {
      return hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/map-id/generate`,
        body: JSON.stringify(params),
      })
    },

    ghostTransferOwnership(params: {
      domain: string
      rootDomain: string
      token: string
      service: string
      username: string
      ghostID: string
      newOwnerUsername: string
    }) {
      return hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/transfer`,
        body: JSON.stringify(params),
      })
    },

    ghostDisableData(params: { domain: string; rootDomain: string; token: string; service: string; ghostID: string }) {
      return hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/disable-data`,
        body: JSON.stringify(params),
      })
    },

    ghostAllowLink(params: {
      domain: string
      rootDomain: string
      token: string
      service: string
      ghostID: string
      linkedFrom: string
    }) {
      return hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/link/allow`,
        body: JSON.stringify(params),
      })
    },

    ghostDenyLink(params: {
      domain: string
      rootDomain: string
      token: string
      service: string
      username: string
      linkedFrom: string
    }) {
      hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/link/deny`,
        body: JSON.stringify(params),
      })
    },

    ghostStatus(params: {
      domain: string
      rootDomain: string
      token: string
      service: string
      username: string
      ghostID: string
    }) {
      return hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/status`,
        body: JSON.stringify(params),
      })
    },

    ghostMorphedAdd(params: {
      domain: string
      rootDomain: string
      token: string
      service: string
      ghostID: string
      refDomain: string
      refService: string
      refGhostID: string
    }) {
      return hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/morphed/add`,
        body: JSON.stringify(params),
      })
    },

    ghostMorphedRemove(params: {
      domain: string
      rootDomain: string
      token: string
      service: string
      ghostID: string
      refDomain: string
      refService: string
      refGhostID: string
    }) {
      return hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/morphed/remove`,
        body: JSON.stringify(params),
      })
    },

    ghostReadAccessAdd(params: {
      domain: string
      rootDomain: string
      token: string
      service: string
      username: string
      ghostID: string
    }) {
      return hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/read-access/add`,
        body: JSON.stringify(params),
      })
    },

    ghostReadAccessRemove(params: {
      domain: string
      rootDomain: string
      token: string
      service: string
      username: string
      ghostID: string
    }) {
      return hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/read-access/remove`,
        body: JSON.stringify(params),
      })
    },
  }
}

export default createHiveGhost
