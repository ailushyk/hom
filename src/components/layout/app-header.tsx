import { AuthButton } from '@/components/auth/auth-button'
import Link from 'next/link'

export function AppHeader() {
  return (
    <header className="border-b py-3">
      <div className="container grid grid-cols-[auto,1fr,auto] items-center gap-6">
        <Link href="/">HoM</Link>
        <nav className="text-muted-foreground">
          <ul className="flex gap-6">
            <li>
              <Link href="/vocabulary">Vocabulary</Link>
            </li>
          </ul>
        </nav>
        <AuthButton />
      </div>
    </header>
  )
}
