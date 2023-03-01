import hivePost from '../utils/hivePost.js'
import type {
  GhostAcceptPendingParams,
  GhostAddMapIDParams,
  GhostDeleteParams,
  GhostDisableDataParams,
  GhostGenerateMapIDParams,
  GhostGetPendingParams,
  GhostRejectPendingParams,
  GhostTransferOwnershipParams,
  GhostGetAllParams,
  GhostAllowLinkParams,
  GhostDenyLinkParams,
  GhostStatusParams,
  GhostMorphedAddParams,
  GhostMorphedRemoveParams,
  GhostReadAccessAddParams,
  GhostReadAccessRemoveParams,
} from './types.js'

const useHiveGhost = (hiveURL: string) => {
  const props = {
    hiveURL,
    basePath: '/api/ghosts',
  }

  return {
    ghostGetAll(params: GhostGetAllParams) {
      return hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}`,
        body: JSON.stringify(params),
      })
    },

    ghostDelete(params: GhostDeleteParams) {
      return hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/delete`,
        body: JSON.stringify(params),
      })
    },

    ghostGetPending(params: GhostGetPendingParams) {
      return hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/pending`,
        body: JSON.stringify(params),
      })
    },

    ghostAcceptPending(params: GhostAcceptPendingParams) {
      return hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/pending/accept`,
        body: JSON.stringify(params),
      })
    },

    ghostRejectPending(params: GhostRejectPendingParams) {
      return hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/pending/reject`,
        body: JSON.stringify(params),
      })
    },

    ghostAddMapID(params: GhostAddMapIDParams) {
      return hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/map-id/add`,
        body: JSON.stringify(params),
      })
    },

    ghostGenerateMapID(params: GhostGenerateMapIDParams) {
      return hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/map-id/generate`,
        body: JSON.stringify(params),
      })
    },

    ghostTransferOwnership(params: GhostTransferOwnershipParams) {
      return hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/transfer`,
        body: JSON.stringify(params),
      })
    },

    ghostDisableData(params: GhostDisableDataParams) {
      return hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/disable-data`,
        body: JSON.stringify(params),
      })
    },

    ghostAllowLink(params: GhostAllowLinkParams) {
      return hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/link/allow`,
        body: JSON.stringify(params),
      })
    },

    ghostDenyLink(params: GhostDenyLinkParams) {
      hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/link/deny`,
        body: JSON.stringify(params),
      })
    },

    ghostStatus(params: GhostStatusParams) {
      return hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/status`,
        body: JSON.stringify(params),
      })
    },

    ghostMorphedAdd(params: GhostMorphedAddParams) {
      return hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/morphed/add`,
        body: JSON.stringify(params),
      })
    },

    ghostMorphedRemove(params: GhostMorphedRemoveParams) {
      return hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/morphed/remove`,
        body: JSON.stringify(params),
      })
    },

    ghostReadAccessAdd(params: GhostReadAccessAddParams) {
      return hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/read-access/add`,
        body: JSON.stringify(params),
      })
    },

    ghostReadAccessRemove(params: GhostReadAccessRemoveParams) {
      return hivePost({
        hiveURL: props.hiveURL,
        path: `${props.basePath}/read-access/remove`,
        body: JSON.stringify(params),
      })
    },
  }
}

export default useHiveGhost

export type {
  GhostAcceptPendingParams,
  GhostAddMapIDParams,
  GhostDeleteParams,
  GhostDisableDataParams,
  GhostGenerateMapIDParams,
  GhostGetPendingParams,
  GhostRejectPendingParams,
  GhostTransferOwnershipParams,
  GhostGetAllParams,
  GhostAllowLinkParams,
  GhostDenyLinkParams,
  GhostStatusParams,
  GhostMorphedAddParams,
  GhostMorphedRemoveParams,
  GhostReadAccessAddParams,
  GhostReadAccessRemoveParams,
}
