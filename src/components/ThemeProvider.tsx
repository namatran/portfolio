// This component manages dark mode state and persists it to localStorage. 
// It wraps the entire app so all child components can access the theme.

'use client';

import { useEffect, useState } from 'react';

// Children is a React prop that represents whatever is inside the component.
export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Load saved theme from localStorage on first render
        // Read localStorage BEFORE rendering anything
        const savedTheme = localStorage.getItem('theme') || 'light';
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark');
        }
        setMounted(true); // Prevent hydration mismatch where it loads wrong theme
    }, []);

    // Don't render until client is mounted (prevents flash of wrong theme)
    if (!mounted) return <>{children}</>;

    return <>{children}</>;
}