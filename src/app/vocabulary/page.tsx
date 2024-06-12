import { addWordAction } from '@/app/vocabulary/vocabulary-actions'
import { Fieldset } from '@/components/form/fieldset'
import { Form } from '@/components/form/form'
import { SubmitButton } from '@/components/form/submit-button'
import { PageTitle } from '@/components/page-title'
import { Container } from '@/components/ui/container'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { WordListItem } from '@/components/word-list-item'
import { getAuthenticatedUser } from '@/lib/auth/auth-service'
import { vocabularyService } from '@/lib/vocabulary/vocabulary-service'

export default async function VocabularyPage() {
  const user = await getAuthenticatedUser()
  const words = await vocabularyService().getWords(user.id)

  return (
    <Container className="space-y-6">
      <PageTitle>Vocabulary</PageTitle>

      <Form action={addWordAction}>
        <h2>New word</h2>
        <Fieldset className="mt-2 flex items-center justify-between gap-4">
          <Select name="language">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
            </SelectContent>
          </Select>
          <Input id="word" type="text" name="text" className="flex-1" />
          <SubmitButton>Add</SubmitButton>
        </Fieldset>
      </Form>

      <div className="divide-y divide-gray-700">
        {words.map((word) => (
          <WordListItem key={word.id} word={word} />
        ))}
      </div>
    </Container>
  )
}
