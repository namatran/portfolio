'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useNoteSound } from '@/lib/useNoteSound'

export function ProjectGallery({ images }: { images: string[] }) {
    const [selected, setSelected] = useState<string | null>(null)
    
    const { playClick, playExit } = useNoteSound()

    if (!images || !Array.isArray(images)) return null

    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {images.map((src, i) => (
                    <div
                        key={i}
                        className="relative w-80 h-40 rounded-lg overflow-hidden cursor-zoom-in hover:scale-105 transition-transform duration-200"
                        onClick={() => { setSelected(src); playClick() }}
                    >
                        <Image
                            src={src}
                            alt={`Project image ${i + 1}`}
                            fill
                            className="object-cover"
                        />
                    </div>
                ))}
            </div>

            {selected && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center cursor-zoom-out"
                    style={{ background: 'rgba(0,0,0,0.8)' }}
                    onClick={() => { setSelected(null); playExit() }}
                >
                    <div className="relative w-[80vw] h-[80vh]">
                        <Image
                            src={selected}
                            alt="Selected project image"
                            fill
                            className="object-contain rounded-xl"
                        />
                    </div>
                </div>
            )}
        </>
    )
}