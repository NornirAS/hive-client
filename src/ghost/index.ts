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

    async ghostAdd(params: any) {
      const res = await hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/add`,
        body: JSON.stringify(params),
      })
      return res
    },

    async ghostRemove(params: any) {
      const res = await hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/remove`,
        body: JSON.stringify(params),
      })
      return res
    },

    async ghostGetUntied(params: any) {
      const res = await hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/untied`,
        body: JSON.stringify(params),
      })
      return res
    },

    async ghostAccept(params: any) {
      const res = await hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/accept`,
        body: JSON.stringify(params),
      })
      return res
    },

    async ghostReject(params: any) {
      const res = await hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/reject`,
        body: JSON.stringify(params),
      })
      return res
    },

    async ghostAddMapID(params: any) {
      const res = await hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/add-map-id`,
        body: JSON.stringify(params),
      })
      return res
    },

    async ghostGenerateMapID(params: any) {
      const res = await hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/generate-map-id`,
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
        path: `${props.basePath}/allow-link`,
        body: JSON.stringify(params),
      })
      return res
    },

    async ghostDenyLink(params: any) {
      const res = await hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/deny-link`,
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

    async ghostMorph(params: any) {
      const res = await hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/add-primary`,
        body: JSON.stringify(params),
      })
      return res
    },

    async ghostUnmorph(params: any) {
      const res = await hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/remove-primary`,
        body: JSON.stringify(params),
      })
      return res
    },

    async ghostGiveReadAccess(params: any) {
      const res = await hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/give-read-access`,
        body: JSON.stringify(params),
      })
      return res
    },

    async ghostRemoveReadAccess(params: any) {
      const res = await hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/remove-read-access`,
        body: JSON.stringify(params),
      })
      return res
    },
  }
}

export default createHiveGhost
