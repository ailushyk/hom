export const api = async (url: string, init?: RequestInit) => {
  console.info('Make Api Request: ', url)
  try {
    const resp = await fetch(url, init)
    if (resp.ok) {
      if (resp.status === 204) {
        return null
      }
      return await resp.json()
    }

    if (resp.status === 400) {
      const body = await resp.json()
      return { error: 'Bad Request', ...body }
    }

    if (resp.status === 401) {
      return { error: 'Unauthorized' }
    }

    if (resp.status === 403) {
      return { error: 'Forbidden' }
    }

    if (resp.status === 404) {
      return { error: 'Not Found' }
    }

    if (resp.status === 500) {
      return { error: 'Internal Server Error' }
    }

    console.log('!API ERROR: ', resp)
  } catch (err) {
    console.error('!API ERROR: ', err)
    if (err instanceof Error) {
      throw new Error(err.message)
    }
    throw new Error('Failed to make API request')
  }

  throw new Error('You should not be here!')
}
