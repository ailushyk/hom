import { Container } from '@/components/ui/container'
import { getAuthenticatedUser } from '@/lib/auth/auth-service'
import { vocabularyService } from '@/lib/vocabulary/vocabulary-service'
import { notFound } from 'next/navigation'

export default async function WordPage({
  params,
}: {
  params: {
    wordId: string
  }
}) {
  const user = await getAuthenticatedUser()
  const word = await vocabularyService().getWordById(params.wordId, user.id)

  if (!word) {
    notFound()
  }

  return (
    <Container>
      <h1>Word</h1>
      <div>
        <div>text: {word.text}</div>
        <div>language: {word.language}</div>
      </div>
    </Container>
  )
}
