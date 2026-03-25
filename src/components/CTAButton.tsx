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
                border: '1.5px solid var(--accent-cta)',
                color: 'var(--accent-cta-text)'
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
            onClick={() => playClick2()}
        >
            See my work ↗
        </Link>
    )
}