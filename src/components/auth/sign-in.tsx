import { Button } from '@/components/ui/button'
import { auth, signIn, signOut } from '@/lib/auth'

export async function SignIn() {
  const session = await auth()

  if (session) {
    return (
      <div>
        Hello {session.user?.name}
        <form
          action={async () => {
            'use server'
            await signOut()
          }}
        >
          <Button>Signout</Button>
        </form>
      </div>
    )
  }

  return (
    <form
      action={async () => {
        'use server'
        await signIn('keycloak')
      }}
    >
      <Button type="submit">Signin with Keycloak</Button>
    </form>
  )
}
