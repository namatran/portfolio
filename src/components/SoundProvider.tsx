// ENTIRELY AI
'use client';

import { createContext, useContext, useState, useEffect } from 'react';

interface SoundContextType {
    soundEnabled: boolean;
    toggleSound: () => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export function SoundProvider({ children }: { children: React.ReactNode }) {
    const [soundEnabled, setSoundEnabled] = useState(true);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const savedSound = localStorage.getItem('soundEnabled');
        if (savedSound !== null) {
            setSoundEnabled(savedSound === 'true');
        }
        setMounted(true);
    }, []);

    return (
        <SoundContext.Provider value={{ soundEnabled, toggleSound: () => {
            const newState = !soundEnabled;
            setSoundEnabled(newState);
            localStorage.setItem('soundEnabled', newState.toString());

            // Play sound when toggling ON
            if (newState) {
                const enableSound = new Audio('/sounds/pmsfx_UIBeep_UI_Deny_Access_Glass_1_PMSFXZAPSPLAT_ZSUIEX.mp3');
                enableSound.play();
            }
        }}}>
            {children}
        </SoundContext.Provider>
    );
}

export function useSound() {
    const context = useContext(SoundContext);
    if (!context) {
        throw new Error('useSound must be used inside SoundProvider');
    }
    return context;
}