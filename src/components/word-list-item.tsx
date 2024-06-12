import { Word } from '@/lib/vocabulary/schema'
import Link from 'next/link'

export function WordListItem({ word }: { word: Word }) {
  return (
    <div className="flex justify-between gap-2 px-4 py-2">
      <Link href={`/vocabulary/${word.id}`}>{word.text}</Link>
      <div>{word.language}</div>
    </div>
  )
}
