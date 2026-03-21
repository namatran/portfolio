'use client'

import { useNoteSound } from '@/lib/useNoteSound'

type Props = {
    links: Array<{ text: string; url: string }>
}

export function ProjectLinks({ links }: Props) {
    const { playNote } = useNoteSound()
    const { playClick } = useNoteSound()

    return (
        <div className="flex gap-3">
            {links.map((link, i) => (
                <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    className="text-sm px-4 py-2 rounded border-[1.5px] transition-all duration-200 hover:-translate-y-0.5"
                    style={{ borderColor: 'var(--accent-primary)', color: 'var(--accent-primary)' }}
                    onMouseEnter={() => playNote()}
                    onClick={() => playClick()}
                >
                    {link.text}
                </a>
            ))}
        </div>
    )
}