import { auth } from '@/lib/auth'
import { UnauthorizedError } from '@/lib/errors/unauthorized-error'

export async function getAuthenticatedUser() {
  const session = await auth()

  if (!session) {
    throw new UnauthorizedError()
  }

  return session.user
}
