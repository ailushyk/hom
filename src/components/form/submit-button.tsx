'use client'

import { Button } from '@/components/ui/button'
import { useFormStatus } from 'react-dom'

export function SubmitButton({ children }: { children: string }) {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" variant="secondary" disabled={pending}>
      {children}
    </Button>
  )
}
