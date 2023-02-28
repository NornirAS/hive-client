import hivePost from '../utils/hivePost.js'

const createHiveGhost = (hiveURL: string) => {
  const props = {
    hiveURL,
    basePath: '/api/ghosts',
  }

  return {
    async ghostGetAll(params: { domain: string; rootDomain: string; token: string }) {
      const res = await hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}`,
        body: JSON.stringify(params),
      })
      return res
    },

    async ghostDelete(params: { domain: string; rootDomain: string; token: string; service: string; ghostID: string }) {
      const res = await hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/delete`,
        body: JSON.stringify(params),
      })
      return res
    },

    async ghostGetPending(params: {
      domain: string
      rootDomain: string
      token: string
      service: string
      username: string
    }) {
      const res = await hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/pending`,
        body: JSON.stringify(params),
      })
      return res
    },

    async ghostAcceptPending(params: {
      domain: string
      rootDomain: string
      token: string
      service: string
      username: string
      ghostID: string
    }) {
      const res = await hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/pending/accept`,
        body: JSON.stringify(params),
      })
      return res
    },

    async ghostRejectPending(params: {
      domain: string
      rootDomain: string
      token: string
      service: string
      username: string
      ghostID: string
    }) {
      const res = await hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/pending/reject`,
        body: JSON.stringify(params),
      })
      return res
    },

    async ghostAddMapID(params: {
      domain: string
      rootDomain: string
      token: string
      service: string
      mapID: string
      ghostID: string
    }) {
      const res = await hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/map-id/add`,
        body: JSON.stringify(params),
      })
      return res
    },

    async ghostGenerateMapID(params: {
      domain: string
      rootDomain: string
      token: string
      service: string
      ghostID: string
    }) {
      const res = await hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/map-id/generate`,
        body: JSON.stringify(params),
      })
      return res
    },

    async ghostTransferOwnership(params: {
      domain: string
      rootDomain: string
      token: string
      service: string
      username: string
      ghostID: string
      newOwnerUsername: string
    }) {
      const res = await hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/transfer`,
        body: JSON.stringify(params),
      })
      return res
    },

    async ghostDisableData(params: {
      domain: string
      rootDomain: string
      token: string
      service: string
      ghostID: string
    }) {
      const res = await hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/disable-data`,
        body: JSON.stringify(params),
      })
      return res
    },

    async ghostAllowLink(params: {
      domain: string
      rootDomain: string
      token: string
      service: string
      ghostID: string
      linkedFrom: string
    }) {
      const res = await hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/link/allow`,
        body: JSON.stringify(params),
      })
      return res
    },

    async ghostDenyLink(params: {
      domain: string
      rootDomain: string
      token: string
      service: string
      username: string
      linkedFrom: string
    }) {
      const res = await hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/link/deny`,
        body: JSON.stringify(params),
      })
      return res
    },

    async ghostStatus(params: {
      domain: string
      rootDomain: string
      token: string
      service: string
      username: string
      ghostID: string
    }) {
      const res = await hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/status`,
        body: JSON.stringify(params),
      })
      return res
    },

    async ghostMorphedAdd(params: {
      domain: string
      rootDomain: string
      token: string
      service: string
      ghostID: string
      refDomain: string
      refService: string
      refGhostID: string
    }) {
      const res = await hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/morphed/add`,
        body: JSON.stringify(params),
      })
      return res
    },

    async ghostMorphedRemove(params: {
      domain: string
      rootDomain: string
      token: string
      service: string
      ghostID: string
      refDomain: string
      refService: string
      refGhostID: string
    }) {
      const res = await hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/morphed/remove`,
        body: JSON.stringify(params),
      })
      return res
    },

    async ghostReadAccessAdd(params: {
      domain: string
      rootDomain: string
      token: string
      service: string
      username: string
      ghostID: string
    }) {
      const res = await hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/read-access/add`,
        body: JSON.stringify(params),
      })
      return res
    },

    async ghostReadAccessRemove(params: {
      domain: string
      rootDomain: string
      token: string
      service: string
      username: string
      ghostID: string
    }) {
      const res = await hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/read-access/remove`,
        body: JSON.stringify(params),
      })
      return res
    },
  }
}

export default createHiveGhost
