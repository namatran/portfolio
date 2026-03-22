'use client'

import { useRouter } from 'next/navigation'
import { useNoteSound } from '@/lib/useNoteSound'

export function ProjectNav() {
    const router = useRouter()
    const { playExit } = useNoteSound()

    return (
        <button 
            onClick={() => { playExit(); router.back() }}
            className="text-xs mb-8 cursor-pointer text-[var(--light-text-secondary)] transition-colors hover:text-[var(--light-text-hover)]"
        >
            ← Back
        </button>
    )
}