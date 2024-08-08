import { SpinnerIcon } from '@/components/icons/spinner-icon'

export function Loading() {
  return (
    <span className="absolute animate-spin duration-1000">
      <SpinnerIcon />
    </span>
  )
}
