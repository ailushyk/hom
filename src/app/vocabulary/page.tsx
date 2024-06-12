import { Container } from '@/components/ui/container'
import { WordListItem } from '@/components/word-list-item'
import { getAuthenticatedUser } from '@/lib/auth/auth-service'
import { vocabularyService } from '@/lib/vocabulary/vocabulary-service'

export default async function VocabularyPage() {
  const user = await getAuthenticatedUser()
  const words = await vocabularyService().getWords(user.id)

  return (
    <Container>
      <h1>Vocabulary</h1>
      <div>user: {user.username}</div>

      <div className="divide-y divide-gray-700">
        {words.map((word) => (
          <WordListItem key={word.id} word={word} />
        ))}
      </div>
    </Container>
  )
}
