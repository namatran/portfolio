'use client'

import Link from "next/link"
import { useNoteSound } from '@/lib/useNoteSound'

export function CTAButton() {
    const { playClick2 } = useNoteSound()
    
    return (
        <Link
            href="/work"
            className="px-6 py-3 text-[15px] font-medium rounded cursor-pointer transition-all duration-200 inline"
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
            onClick={() => playClick2()}
        >
            See my work ↗
        </Link>
    )
}