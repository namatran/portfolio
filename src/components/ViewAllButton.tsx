'use client'
 
import Link from "next/link"
import { useNoteSound } from '@/lib/useNoteSound'
 
export function ViewAllButton() {
    const { playClick } = useNoteSound()
    
    return (
        <Link
            href="/work"
            className="inline-block my-8 py-2.5 text-[14px] font-medium transition-all duration-200 border-b-[1.5px] hover:pl-1"
            style={{
                color: 'var(--accent-cta-text)',
                borderBottomColor: 'var(--accent-cta)',
            }}
            onClick={() => playClick()}
        >
            View all projects →
        </Link>
    )
}
 