import useHiveAuth, { AuthGetTokenParams } from './auth/index.js'
import useHiveDomain, {
  DomainGetAllParams,
  DomainCreateParams,
  DomainDeleteParams,
  DomainActivateParams,
  DomainDeactivateParams,
} from './domain/index.js'
import useHiveService, {
  ServiceCreateParams,
  ServiceDeleteParams,
  ServiceGetAllParams,
  ServiceGhostAddParams,
  ServiceLinksParams,
  ServiceLinksUpdateParams,
  ServiceUpdateParams,
} from './service/index.js'
import useHiveGhost, {
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
} from './ghost/index.js'

const createHiveClient = (hiveURL: string) => ({
  ...useHiveAuth(hiveURL),
  ...useHiveDomain(hiveURL),
  ...useHiveService(hiveURL),
  ...useHiveGhost(hiveURL),
})

export default createHiveClient

export type {
  AuthGetTokenParams,
  DomainGetAllParams,
  DomainCreateParams,
  DomainDeleteParams,
  DomainActivateParams,
  DomainDeactivateParams,
  ServiceCreateParams,
  ServiceDeleteParams,
  ServiceGetAllParams,
  ServiceGhostAddParams,
  ServiceLinksParams,
  ServiceLinksUpdateParams,
  ServiceUpdateParams,
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
