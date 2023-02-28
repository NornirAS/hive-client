export interface ServiceGetAll {
  domains: string
  rootDomain: string
  token: string
}

export interface ServiceCreate {
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

export interface ServiceUpdate {
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

export interface ServiceDelete {
  domains: string
  rootDomain: string
  token: string
  service: string
}

export interface ServiceLinks {
  domains: string
  rootDomain: string
  token: string
  service: string
}

export interface ServiceLinksUpdate {
  domains: string
  rootDomain: string
  token: string
  service: string
  links: string[]
}

export interface ServiceGhostAdd {
  domains: string
  rootDomain: string
  token: string
  service: string
  quantity: string | number
}
