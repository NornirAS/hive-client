export interface ServiceGetAllParams {
  domains: string
  rootDomain: string
  token: string
}

export interface ServiceCreateParams {
  rootDomain: string
  token: string
  username: string
  service: string
  authToken: string
  dataSchema: string
  timeout: string | number
  commandSchema?: string
  preScript?: string
  postScript?: string
}

export interface ServiceUpdateParams {
  rootDomain: string
  token: string
  service: string
  authToken: string
  dataSchema: string
  timeout: string | number
  commandSchema?: string
  preScript?: string
  postScript?: string
}

export interface ServiceDeleteParams {
  domains: string
  rootDomain: string
  token: string
  service: string
}

export interface ServiceLinksParams {
  domains: string
  rootDomain: string
  token: string
  service: string
}

export interface ServiceLinksUpdateParams {
  domains: string
  rootDomain: string
  token: string
  service: string
  links: string[]
}

export interface ServiceGhostAddParams {
  domains: string
  rootDomain: string
  token: string
  service: string
  quantity: string | number
}
