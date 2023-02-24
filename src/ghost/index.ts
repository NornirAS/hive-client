import hivePost from '../utils/hivePost.js'

const createHiveGhost = (hiveURL: string) => {
  const props = {
    hiveURL,
    basePath: '/api/ghosts',
  }

  return {
    async ghostGetAll(params: any) {
      const res = await hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}`,
        body: JSON.stringify(params),
      })
      return res
    },

    async ghostDelete(params: any) {
      const res = await hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/delete`,
        body: JSON.stringify(params),
      })
      return res
    },

    async ghostGetPending(params: any) {
      const res = await hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/pending`,
        body: JSON.stringify(params),
      })
      return res
    },

    async ghostAcceptPending(params: any) {
      const res = await hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/pending/accept`,
        body: JSON.stringify(params),
      })
      return res
    },

    async ghostRejectPending(params: any) {
      const res = await hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/pending/reject`,
        body: JSON.stringify(params),
      })
      return res
    },

    async ghostAddMapID(params: any) {
      const res = await hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/map-id/add`,
        body: JSON.stringify(params),
      })
      return res
    },

    async ghostGenerateMapID(params: any) {
      const res = await hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/map-id/generate`,
        body: JSON.stringify(params),
      })
      return res
    },

    async ghostTransferOwnership(params: any) {
      const res = await hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/transfer`,
        body: JSON.stringify(params),
      })
      return res
    },

    async ghostDisableData(params: any) {
      const res = await hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/disable-data`,
        body: JSON.stringify(params),
      })
      return res
    },

    async ghostAllowLink(params: any) {
      const res = await hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/link/allow`,
        body: JSON.stringify(params),
      })
      return res
    },

    async ghostDenyLink(params: any) {
      const res = await hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/link/deny`,
        body: JSON.stringify(params),
      })
      return res
    },

    async ghostStatus(params: any) {
      const res = await hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/status`,
        body: JSON.stringify(params),
      })
      return res
    },

    async ghostMorphedAdd(params: any) {
      const res = await hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/morphed/add`,
        body: JSON.stringify(params),
      })
      return res
    },

    async ghostMorphedRemove(params: any) {
      const res = await hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/morphed/remove`,
        body: JSON.stringify(params),
      })
      return res
    },

    async ghostReadAccessAdd(params: any) {
      const res = await hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/read-access/add`,
        body: JSON.stringify(params),
      })
      return res
    },

    async ghostReadAccessRemove(params: any) {
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
