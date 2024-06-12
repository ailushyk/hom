import { API_URL } from '@/env'
import { api } from '@/lib/api'
import { Word } from '@/lib/vocabulary/schema'

export const vocabularyService = () => {
  return {
    async getWords(userId: string): Promise<Word[]> {
      const { data } = await api(`${API_URL}/api/vocabulary/${userId}`)
      return data
    },
    async getWordById(wordId: string, userId: string) {
      const { data } = await api(
        `${API_URL}/api/vocabulary/${userId}/${wordId}`,
      )
      console.log('getWordById: ', data)
      return data
    },
  }
}
