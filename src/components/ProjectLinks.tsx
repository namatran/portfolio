'use client'

import { useNoteSound } from '@/lib/useNoteSound'

type Props = {
    links: Array<{ text: string; url: string }>
}

export function ProjectLinks({ links }: Props) {
    const { playClick } = useNoteSound()

    return (
        <div className="flex gap-3">
            {links.map((link, i) => (
                <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    className="text-sm font-semibold px-4 py-2 rounded transition-all duration-200"
                    style={{ 
                        borderColor: 'var(--accent-cta)', 
                        color: 'var(--accent-cta)',
                        border: '1.5px solid var(--accent-cta)'
                    }}
                    onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.background = 'var(--accent-cta)'
                        e.currentTarget.style.color = 'white'
                    }}
                    onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.background = 'transparent'
                        e.currentTarget.style.color = 'var(--accent-cta)'
                    }}
                    onClick={() => playClick()}
                >
                    {link.text}
                </a>
            ))}
        </div>
    )
}