import { Container } from '@/components/ui/container'
import Link from 'next/link'

export default function Home() {
  return (
    <Container className="space-y-4">
      <h1 className="border-b py-4">Halls of Memory</h1>

      <nav>
        <ul>
          <li>
            <Link href="/vocabulary">Vocabulary</Link>
          </li>
        </ul>
      </nav>
    </Container>
  )
}
