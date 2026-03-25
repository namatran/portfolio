'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { useNoteSound } from '@/lib/useNoteSound'

export function Gallery({ images }: { images: string[] }) {
    const [selected, setSelected] = useState<string | null>(null)
    const { playClick, playExit } = useNoteSound()
    const overlayRef = useRef<HTMLDivElement>(null)

    // autoFocus on a div is unreliable — imperatively focus the ref instead
    useEffect(() => {
        if (selected) overlayRef.current?.focus()
    }, [selected])

    const close = () => { setSelected(null); playExit() }

    if (!images || !Array.isArray(images)) return null

    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {images.map((src, i) => (
                    <button
                        key={i}
                        className="relative w-full aspect-video rounded-lg overflow-hidden cursor-zoom-in hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] focus:ring-offset-2"
                        onClick={() => { setSelected(src); playClick() }}
                        aria-label={`View screenshot ${i + 1} of ${images.length}`}
                    >
                        <Image
                            src={src}
                            alt={`Project screenshot ${i + 1}`}
                            fill
                            className="object-cover"
                            loading="lazy"
                        />
                    </button>
                ))}
            </div>

            {selected && (
                <div
                    ref={overlayRef}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Image lightbox"
                    tabIndex={-1}
                    className="fixed inset-0 z-50 flex items-center justify-center cursor-zoom-out focus:outline-none"
                    style={{ background: 'rgba(0,0,0,0.8)' }}
                    onClick={close}
                    onKeyDown={e => { if (e.key === 'Escape') close() }}
                >
                    <div className="relative w-[80vw] h-[80vh]">
                        <Image
                            src={selected}
                            alt="Enlarged project screenshot"
                            fill
                            className="object-contain rounded-xl"
                        />
                    </div>
                </div>
            )}
        </>
    )
}

{ /* 
    Gallery.tsx → src/components/Gallery.tsx

    Gallery thumbnails changed from <div> to <button> — divs aren't keyboard focusable, buttons are. Tab + Enter now works.
    Added focus:ring-2 for visible keyboard focus indicator
    loading="lazy" on gallery images (they're always below the fold)
    Lightbox has role="dialog", aria-modal, and closes on Escape key
    aspect-video replaces the hardcoded w-80 h-40 so thumbnails scale properly
*/ }