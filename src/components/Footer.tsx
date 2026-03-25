'use client';

export function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer
            className="flex justify-between items-center py-8 px-6 sm:px-10 md:px-10 lg:px-20 xl:px-40 border-t flex-wrap gap-4"
            style={{ borderColor: 'var(--light-border)' }}
        >
            <p className="text-sm text-[var(--light-text-secondary)]">
                © {year} Nam Tran. Built with Next.js.
            </p>
            
            <nav aria-label="Social links" className="flex gap-6 text-sm">
                <a
                    href="https://www.linkedin.com/in/nam-atran/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--light-text-secondary)] hover:text-[var(--light-text-hover)] transition-colors"
                >
                    LinkedIn
                </a>   
                <a
                    href="https://github.com/namatran"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--light-text-secondary)] hover:text-[var(--light-text-hover)] transition-colors"
                >
                    GitHub
                </a>   
                <a
                    href="https://www.youtube.com/@naminabush"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--light-text-secondary)] hover:text-[var(--light-text-hover)] transition-colors"
                >
                    YouTube
                </a>   
                <a
                    href="https://www.instagram.com/naminabush/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--light-text-secondary)] hover:text-[var(--light-text-hover)] transition-colors"
                >
                    Instagram
                </a>   
            </nav>
        </footer>
    );
}