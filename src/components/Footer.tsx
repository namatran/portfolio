// FOOTER - Links
'use client';

export function Footer() {

    return (
    // Semantic HTML first use same as <div>
        <footer className="flex justify-between items-center py-8 px-6 sm:px-10 md:px-10 lg:px-20 xl:px-40 border-t" style={{ borderColor: 'var(--light-border)' }}>
            <p className="text-sm text-[var(--light-text-secondary)]">© 2026 Nam Tran. Built with Next.js.</p>
            
            <nav className="flex gap-8 text-sm">
                <a href="https://www.linkedin.com/in/nam-atran/" target="_blank" rel="noopener noreferrer" className="text-[var(--light-text-secondary)] hover:text-[var(--light-text-hover)]">
                    LinkedIn
                </a>   
                <a href="https://github.com/namatran" target="_blank" rel="noopener noreferrer" className="text-[var(--light-text-secondary)] hover:text-[var(--light-text-hover)]">
                    GitHub
                </a>   
            </nav>
        </footer>
    );
}