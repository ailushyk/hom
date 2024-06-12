import { cn } from '@/lib/utils'

export const PageTitle = ({
  children,
  className,
}: {
  children: string
  className?: string
}) => {
  return (
    <h1 className={cn('border-b py-4 text-xl font-semibold', className)}>
      {children}
    </h1>
  )
}
