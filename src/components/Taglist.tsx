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
                    className={`rounded inline-block transition-transform duration-100 hover:translate-y-0.5 cursor-default text-xs ${size === 'sm' ? 'px-2 py-1' : 'px-3 py-1'}`}
                    style={{ 
                        border: '0.5px solid var(--accent-primary)',
                        borderBottom: '2px solid',
                        background: 'rgba(26,139,122,0.1)', 
                        color: 'var(--accent-primary)'
                    }}
                    onMouseEnter={() => playNote()}
                >
                    {tag}
                </span>
            ))}
        </div>
    )
}