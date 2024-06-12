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
  } catch (err) {
    console.error('!API ERROR: ', err)
    if (err instanceof Error) {
      throw new Error(err.message)
    }
    throw new Error('Failed to make API request')
  }

  throw new Error('You should not be here!')
}
