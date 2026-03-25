import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { SpeedInsights } from '@vercel/speed-insights/next'; 
import { Analytics } from "@vercel/analytics/next"
import { SoundProvider } from '@/components/SoundProvider';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Nam Tran — Full-Stack Developer',
    template: '%s | Nam Tran',
  },
  description: 'Full-stack developer and builder. 10th grade, shipping real projects with React, Next.js, Node.js, and more.',
  keywords: ['full-stack', 'developer', 'Next.js', 'React', 'portfolio', 'Nam Tran'],
  authors: [{ name: 'Nam Tran' }],
  openGraph: {
    title: 'Nam Tran — Full-Stack Developer',
    description: 'Full-stack developer and builder. Shipping real projects.',
    url: 'https://namatran.com',
    siteName: 'Nam Tran',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nam Tran — Full-Stack Developer',
    description: 'Full-stack developer and builder. Shipping real projects.',
  },
  icons: { icon: '/favicon.svg' },
  robots: { index: true, follow: true },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const theme = cookieStore.get('theme')?.value ?? 'light';

  return (
    <html lang="en" className={theme === 'dark' ? 'dark' : ''} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <SoundProvider>
          <Header />
          <main className="flex-1 px-6 sm:px-10 md:px-10 lg:px-20 xl:px-40">
            {children}
          </main>
          <Footer />
        </SoundProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}