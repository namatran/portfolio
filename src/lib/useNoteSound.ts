// Claude AI play sound mp3s
'use client'

import { useRef } from 'react'
import { useSound } from '@/components/SoundProvider'

const notes = Array.from({ length: 13 }, (_, i) => `/sounds/note-${i + 1}.mp3`)

export function useNoteSound() {
    const { soundEnabled } = useSound()
    const indexRef = useRef(0)

    const playNote = () => {
        if (soundEnabled) {
            new Audio(notes[indexRef.current]).play()
            indexRef.current = (indexRef.current + 1) % notes.length
        }
    }

    const playClick = () => {
        if (soundEnabled) {
            new Audio('/sounds/zapsplat_multimedia_button_click_bright_002_92099.mp3').play()
        }
    }

    return { playNote, playClick }
}