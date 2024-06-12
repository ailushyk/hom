'use client'

import { cn } from '@/lib/utils'
import React, { useEffect, useRef } from 'react'
import { useFormState } from 'react-dom'

export function Form({
  action,
  children,
  className,
}: {
  action: any
  children: React.ReactNode
  className?: string
}) {
  const formRef = useRef<HTMLFormElement>(null!)
  const [state, formAction] = useFormState<{
    error?: string
    message?: string
  }>(action, {})

  useEffect(() => {
    if (state.error) {
      console.log(`Error: ${state.error}`)
      console.log(state.message)
    } else {
      formRef.current?.reset()
    }
  }, [state.error])

  return (
    <form
      ref={formRef}
      action={formAction}
      className={cn('border p-4', className)}
    >
      {children}
    </form>
  )
}
