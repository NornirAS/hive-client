import createHiveAuth from './auth/index.js'
import createHiveDomain from './domain/index.js'
import createHiveService from './service/index.js'
import createHiveGhost from './ghost/index.js'
import type { AuthGetTokenParams } from './auth/types.js'
import type {
  DomainGetAllParams,
  DomainCreateParams,
  DomainDeleteParams,
  DomainActivateParams,
  DomainDeactivateParams,
} from './domain/types.js'
import type {
  ServiceCreateParams,
  ServiceDeleteParams,
  ServiceGetAllParams,
  ServiceGhostAddParams,
  ServiceLinksParams,
  ServiceLinksUpdateParams,
  ServiceUpdateParams,
} from './service/types.js'
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
} from './ghost/types.js'

const createHiveClient = (hiveURL: string) => ({
  ...createHiveAuth(hiveURL),
  ...createHiveDomain(hiveURL),
  ...createHiveService(hiveURL),
  ...createHiveGhost(hiveURL),
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
