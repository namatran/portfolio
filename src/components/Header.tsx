// HEADER - navigation bar and light/dark mode.
// Light/Dark mode button updates localStorage for ThemeProvider
// uses Header useEffect to check for the theme upon starting
'use client';

import { BsSun, BsMoon, BsVolumeUp, BsVolumeMute } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSound } from '@/components/SoundProvider';
import { useNoteSound } from '@/lib/useNoteSound';

export function Header() {
    const [isDark, setIsDark] = useState(false);
    const [mounted, setMounted] = useState(false); // Forgot this
    const { soundEnabled, toggleSound } = useSound();

    const { playClick } = useNoteSound()

    useEffect(() => {
        // This runs AFTER the component is on the page
        const savedTheme = localStorage.getItem('theme') || 'light';
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark');
            setIsDark(true); // ← Also forgot this isDark here
        }
        setMounted(true);
    }, []); // Empty dependency array = run once on mount

    const toggleTheme = () => {
        const html = document.documentElement;
        const newIsDark = !isDark;

        // Play sound
        if (soundEnabled) {
            const light = new Audio('/sounds/zapsplat_multimedia_alert_ping_chine_ring_112378.mp3'); 
            const dark = new Audio('/sounds/zapsplat_household_doorbell_chime_bell_001_73122.mp3'); 
            isDark ? dark.play() : light.play();
        }
        
        if (newIsDark) {
            html.classList.add('dark');           // ← Update DOM
            localStorage.setItem('theme', 'dark'); // ← Save for next time
        } else {
            html.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
        
        setIsDark(newIsDark); // ← Update button emoji
    };

    if (!mounted) return null; // Don't render until theme is loaded

    return (
    // Semantic HTML first use same as <div>
        <header className="flex justify-between items-center py-6 px-6 sm:px-10 md:px-10 lg:px-20 xl:px-40 border-b" style={{ borderColor: 'var(--light-border)' }}>    
            <Link href="/" className="text-xl font-semibold tracking-[-0.5px] transition-colors hover:text-[var(--light-text-secondary)]">Nam Tran</Link>
            
            <nav 
                className="flex gap-8 text-sm font-medium"
            >
                <Link href="/" onClick={() => { playClick() }} className="text-[var(--light-text-secondary)] transition-colors hover:text-[var(--light-text-hover)]">
                    Home
                </Link>
                <Link href="/work" onClick={() => { playClick() }} className="text-[var(--light-text-secondary)] transition-colors hover:text-[var(--light-text-hover)]">
                    Work
                </Link>
                <Link href="/about" onClick={() => { playClick() }} className="text-[var(--light-text-secondary)] transition-colors hover:text-[var(--light-text-hover)]">
                    About
                </Link>
            </nav>
            
            <div className="flex gap-4 items-center">
                <button 
                    onClick={toggleTheme} 
                    aria-label="Toggle dark mode"
                    className="w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer"
                    style={{ borderColor: 'transparent', color: 'var(--light-text)' }}
                >
                    {isDark ? <BsSun size={20} /> : <BsMoon size={20} />}
                </button>

                <button 
                    onClick={toggleSound}
                    aria-label={soundEnabled ? 'Mute sound' : 'Unmute sound'}
                    className="w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer"
                    style={{ borderColor: 'transparent', color: 'var(--light-text)' }}
                >
                    {soundEnabled ? <BsVolumeUp size={20} /> : <BsVolumeMute size={20} />}
                </button>
            </div>
        </header>
    );
}