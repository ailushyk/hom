import { auth } from '@/lib/auth/auth'

export async function getAuthenticatedUser() {
  const session = await auth()

  if (!(session?.user && session.user.id)) {
    throw new Error('User not authenticated')
  }

  return session.user
}
