'use client'

import { useNoteSound } from '@/lib/useNoteSound'

type Props = {
    links: Array<{ text: string; url: string }>
}

export function Links({ links }: Props) {
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
                        color: 'var(--accent-cta-text)', // darker shade — passes contrast
                        border: '1.5px solid var(--accent-cta)'
                    }}
                    onMouseEnter={e => {
                        const el = e.currentTarget as HTMLElement
                        el.style.background = 'var(--accent-cta)'
                        el.style.color = 'var(--light-bg)'
                    }}
                    onMouseLeave={e => {
                        const el = e.currentTarget as HTMLElement
                        el.style.background = 'transparent'
                        el.style.color = 'var(--accent-cta-text)'
                    }}
                    onClick={() => playClick()}
                >
                    {link.text}
                </a>
            ))}
        </div>
    )
}