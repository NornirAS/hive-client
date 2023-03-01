import fetch from 'cross-fetch'

interface HiveRequest {
  hiveURL: string
  path: string
  body: string
}

export interface HiveResponse {
  data: unknown
  error: boolean
  message: unknown
}

const hivePost = async ({ hiveURL, path, body }: HiveRequest): Promise<HiveResponse> => {
  try {
    const res = await fetch(`${hiveURL}${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    })

    return await res.json()
  } catch (error) {
    return {
      data: null,
      error: true,
      message: error,
    }
  }
}

export default hivePost
