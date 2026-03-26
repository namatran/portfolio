'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { useNoteSound } from '@/lib/useNoteSound'

type ImageItem = { src: string; caption?: string }

export function Gallery({ images }: { images: ImageItem[] }) {
    const [selected, setSelected] = useState<{ src: string; caption?: string } | null>(null)
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
                {images.map((item, i) => (
                    <button
                        key={i}
                        className="relative w-full aspect-video rounded-lg overflow-hidden cursor-zoom-in hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] focus:ring-offset-2"
                        onClick={() => { setSelected(item); playClick() }}
                        aria-label={`View screenshot ${i + 1} of ${images.length}`}
                    >
                    <div className="relative w-full aspect-video">
                        <Image
                            src={item.src}
                            alt={item.caption ?? `Project screenshot ${i + 1}`}
                            fill
                            sizes="(max-width: 640px) 50vw, 33vw"
                            className="object-cover"
                            loading="lazy"
                        />
                    </div>
                    {item.caption && (
                        <p className="px-2 py-1.5 text-xs text-[var(--light-text-secondary)] text-left">{item.caption}</p>
                    )}
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
                    <div className="relative w-[70vw] h-[70vh]">
                        <Image
                            src={selected.src}
                            alt="Enlarged project screenshot"
                            fill
                            sizes="80vw"
                            className="object-contain rounded-xl"
                        />

                        {selected.caption && (
                            <p className="absolute bottom-[-3rem] left-0 right-0 text-center text-xl text-white/70">
                                {selected.caption}
                            </p>
                        )}
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