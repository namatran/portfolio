import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/ThemeProvider';
import { SoundProvider } from '@/components/SoundProvider';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nam - Portfolio',
  description: 'Full-stack developer & builder',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <ThemeProvider>
          <SoundProvider>
            <Header />
            <main className="max-w-4xl mx-auto px-8 flex-1">{children}</main>
            <Footer />
          </SoundProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
