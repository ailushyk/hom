'use client'

import React from 'react'
import { useFormStatus } from 'react-dom'

export function Fieldset({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const { pending } = useFormStatus()
  return (
    <fieldset className={className} disabled={pending}>
      {children}
    </fieldset>
  )
}
