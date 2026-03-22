'use client'

import { useState } from 'react'
import Image from 'next/image'

export function ProjectGallery({ images }: { images: string[] }) {
    const [selected, setSelected] = useState<string | null>(null)

    if (!images || !Array.isArray(images)) return null

    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {images.map((src, i) => (
                    <div
                        key={i}
                        className="relative h-40 rounded-lg overflow-hidden cursor-pointer hover:-translate-y-1 transition-transform duration-200"
                        onClick={() => setSelected(src)}
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
                    className="fixed inset-0 z-50 flex items-center justify-center"
                    style={{ background: 'rgba(0,0,0,0.8)' }}
                    onClick={() => setSelected(null)}
                >
                    <div className="relative w-[70vw] h-[70vh]">
                        <Image
                            src={selected}
                            alt="Selected project image"
                            fill
                            className="object-contain rounded-xl"
                            onClick={e => e.stopPropagation()}
                        />
                    </div>
                </div>
            )}
        </>
    )
}