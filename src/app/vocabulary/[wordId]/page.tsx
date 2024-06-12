import { Button } from '@/components/ui/button'
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
    <div className="flex flex-col items-center justify-center">
      <div className="relative mb-8 flex w-full items-center justify-center bg-slate-200 p-8 text-slate-800 shadow-inner">
        <h1 className="text-5xl font-bold capitalize drop-shadow">
          {word.text}
        </h1>
        <div className="text-muted-foreground absolute right-3 top-2 text-sm font-semibold uppercase">
          {word.language}
        </div>
      </div>

      <Container>
        {word.translations.map((translation: any) => (
          <div key={translation.id} className="mb-4">
            <div className="text-3xl font-bold">{translation.text}</div>
            <Description description={translation.description} />
          </div>
        ))}
      </Container>

      <div className="fixed bottom-6 flex justify-center">
        <Button variant="secondary" size="lg" className="">
          Translate
        </Button>
      </div>
    </div>
  )
}

function Description(props: { description: string }) {
  if (!props.description) {
    return null
  }

  return (
    <div className="mb-4">
      <div className="text-2xl font-bold">Description</div>
      <div>{props.description}</div>
    </div>
  )
}
