'use client'

import Link from "next/link"
import { useNoteSound } from '@/lib/useNoteSound'

export function CTAButton() {
    const { playClick2 } = useNoteSound()
    
    return (
        <Link
            href="/work"
            className="px-6 py-3 text-[15px] font-medium rounded cursor-pointer transition-all duration-200 inline"
            // In CTAButton.tsx — flip the default state
            style={{ 
                background: 'var(--accent-cta)',
                color: 'var(--light-text)',
                border: '1.5px solid var(--accent-cta)'
            }}
            onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.opacity = '0.8'
            }}
            onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.opacity = '1'
            }}
            onClick={() => playClick2()}
        >
            See my work ↗
        </Link>
    )
}