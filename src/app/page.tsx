import { PageTitle } from '@/components/page-title'
import { Container } from '@/components/ui/container'
import Link from 'next/link'

export default function Home() {
  return (
    <Container className="space-y-4">
      <PageTitle>Halls of Memory</PageTitle>

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
