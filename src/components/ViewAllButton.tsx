'use client'

import Link from "next/link"
import { useNoteSound } from '@/lib/useNoteSound'

export function ViewAllButton() {
    const { playClick } = useNoteSound()
    
    return (
        <Link
            href="/work"
            className="inline-block my-8 py-2.5 text-[var(--accent-cta)] text-[14px] font-medium transition-all duration-200 border-b-[1.5px] border-b-[var(--accent-cta)] hover:-translate-x-1"
            onClick={() => playClick()}
        >
            See my work ↗
        </Link>
    )
}