'use server'

import { getAuthenticatedUser } from '@/lib/auth/auth-service'
import { vocabularyService } from '@/lib/vocabulary/vocabulary-service'
import { revalidatePath } from 'next/cache'

export async function addWordAction(prevState: any, formData: FormData) {
  const user = await getAuthenticatedUser()
  const text = formData.get('text') as string
  const language = formData.get('language') as string

  // sleep 2 seconds
  await new Promise((resolve) => setTimeout(resolve, 1000))
  revalidatePath('/vocabulary')
  return await vocabularyService().addWord({ text, language }, user.id)
}
