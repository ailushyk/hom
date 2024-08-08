import { Button } from '@/components/ui/button'
import { signIn } from '@/lib/auth'
import React from 'react'

export async function SignIn({ children }: { children: React.ReactNode }) {
  return (
    <form
      action={async () => {
        'use server'
        await signIn('keycloak')
      }}
    >
      <Button type="submit">{children}</Button>
    </form>
  )
}
