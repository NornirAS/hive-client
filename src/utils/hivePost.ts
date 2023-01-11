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

    const data = await res.json()

    if (res.status !== 200 || data.error) return [data]

    return [null, data]
  } catch (error) {
    return [error]
  }
}

export default hivePost
