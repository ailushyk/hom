import Link from 'next/link'

export function AppActions() {
  return (
    <div className="actions">
      <div className="fixed bottom-3 left-1/2 z-20 -translate-x-1/2">
        <div className="rounded-xl border-2 px-4 py-3 text-sm backdrop-blur-md">
          <ul className="flex gap-6">
            <li>
              <Link href="/vocabulary">Vocabulary</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="actions_blur-mask" />
    </div>
  )
}
