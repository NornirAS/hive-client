export interface DomainGetAllParams {
  rootDomain: string
  token: string
  username: string
}

export interface DomainCreateParams {
  domain: string
  rootDomain: string
  token: string
  username: string
}

export interface DomainDeleteParams {
  domain: string
  rootDomain: string
  token: string
  username: string
}

export interface DomainActivateParams {
  domain: string
  rootDomain: string
  token: string
  username: string
  authToken: string
}

export interface DomainDeactivateParams {
  domain: string
  rootDomain: string
  token: string
  username: string
  authToken: string
}
