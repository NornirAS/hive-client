import fetch from 'cross-fetch'

interface RequestParams {
  hiveURL: string
  path: string
  body: string
}

const hivePost = async ({ hiveURL, path, body }: RequestParams) => {
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
