export interface GhostGetAllParams {
  domain: string
  rootDomain: string
  token: string
}

export interface GhostDeleteParams {
  domain: string
  rootDomain: string
  token: string
  service: string
  ghostID: string
}

export interface GhostGetPendingParams {
  domain: string
  rootDomain: string
  token: string
  service: string
  username: string
}

export interface GhostAcceptPendingParams {
  domain: string
  rootDomain: string
  token: string
  service: string
  username: string
  ghostID: string
}

export interface GhostRejectPendingParams {
  domain: string
  rootDomain: string
  token: string
  service: string
  username: string
  ghostID: string
}

export interface GhostAddMapIDParams {
  domain: string
  rootDomain: string
  token: string
  service: string
  mapID: string
  ghostID: string
}

export interface GhostGenerateMapIDParams {
  domain: string
  rootDomain: string
  token: string
  service: string
  ghostID: string
}

export interface GhostTransferOwnershipParams {
  domain: string
  rootDomain: string
  token: string
  service: string
  username: string
  ghostID: string
  newOwnerUsername: string
}

export interface GhostDisableDataParams {
  domain: string
  rootDomain: string
  token: string
  service: string
  ghostID: string
}

export interface GhostAllowLinkParams {
  domain: string
  rootDomain: string
  token: string
  service: string
  ghostID: string
  linkedFrom: string
}

export interface GhostDenyLinkParams {
  domain: string
  rootDomain: string
  token: string
  service: string
  username: string
  linkedFrom: string
}

export interface GhostStatusParams {
  domain: string
  rootDomain: string
  token: string
  service: string
  username: string
  ghostID: string
}

export interface GhostMorphedAddParams {
  domain: string
  rootDomain: string
  token: string
  service: string
  ghostID: string
  refDomain: string
  refService: string
  refGhostID: string
}

export interface GhostMorphedRemoveParams {
  domain: string
  rootDomain: string
  token: string
  service: string
  ghostID: string
  refDomain: string
  refService: string
  refGhostID: string
}

export interface GhostReadAccessAddParams {
  domain: string
  rootDomain: string
  token: string
  service: string
  username: string
  ghostID: string
}

export interface GhostReadAccessRemoveParams {
  domain: string
  rootDomain: string
  token: string
  service: string
  username: string
  ghostID: string
}
