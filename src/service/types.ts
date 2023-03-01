export interface ServiceGetAllParams {
  domain: string
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
  domain: string
  rootDomain: string
  token: string
  service: string
}

export interface ServiceLinksParams {
  domain: string
  rootDomain: string
  token: string
  service: string
}

export interface ServiceLinksUpdateParams {
  domain: string
  rootDomain: string
  token: string
  service: string
  links: string[]
}

export interface ServiceGhostAddParams {
  domain: string
  rootDomain: string
  token: string
  service: string
  quantity: string | number
}
