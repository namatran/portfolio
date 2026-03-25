// Claude AI
'use client'

import { useNoteSound } from '@/lib/useNoteSound'

type Props = {
    tags: string[]
    size?: 'sm' | 'md'
}

export function TagList({ tags, size = 'md' }: Props) {
    const { playNote } = useNoteSound()

    return (
        <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
                <span
                    key={i}
                    className={`tag-pill rounded-[4px] inline-block transition-transform duration-100 hover:translate-y-[1.5px] cursor-default text-xs font-medium ${size === 'sm' ? 'px-2 py-1' : 'px-3 py-1'}`}
                    onMouseEnter={() => playNote()}
                >
                    {tag}
                </span>
            ))}
        </div>
    )
}