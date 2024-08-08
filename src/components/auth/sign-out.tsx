'use client'

import { Button } from '@/components/ui/button'
import { signOutAction } from '@/lib/auth/auth-actions'
import { Slot } from '@radix-ui/react-slot'
import { useRouter } from 'next/navigation'
import React from 'react'

export function SignOut({
  children,
  className,
  asChild = false,
}: {
  children: React.ReactNode
  className?: string
  asChild?: boolean
}) {
  const { refresh } = useRouter()
  const Comp = asChild ? Slot : Button
  return (
    <Comp
      onClick={async () => {
        await signOutAction()
        refresh()
      }}
      className={className}
    >
      {children}
    </Comp>
  )
}
