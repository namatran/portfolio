'use client'

import Link from 'next/link'
import { useNoteSound } from '@/lib/useNoteSound'

export function ProjectNav() {
    const { playClick } = useNoteSound()

    return (
        <div className="flex flex-row gap-4 text-sm mb-8 items-center">
            <Link href="/work" onClick={() => playClick()} className="text-xs text-[var(--light-text-secondary)] transition-colors hover:text-[var(--light-text-hover)]">View all work</Link>
            <span className="text-xs" style={{ color: 'var(--light-border)' }}>|</span>
            <Link href="/" onClick={() => playClick()} className="text-xs text-[var(--light-text-secondary)] transition-colors hover:text-[var(--light-text-hover)]">Home</Link>
        </div>
    )
}