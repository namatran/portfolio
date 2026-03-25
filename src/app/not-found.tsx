import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: '404 — Page Not Found',
}

export default function NotFound() {
    return (
        <main className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
            <p className="section-label mb-4">404</p>
            <h1 className="page-title mb-4">Page not found</h1>
            <p className="section-text mb-8 max-w-sm">
                This page doesn&apos;t exist. Maybe the URL changed, or it never existed.
            </p>
            <Link
                href="/"
                className="text-[var(--accent-cta)] text-sm font-medium border-b-[1.5px] border-[var(--accent-cta)] pb-0.5 transition-all hover:pl-1"
            >
                ← Back home
            </Link>
        </main>
    )
}