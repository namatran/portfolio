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
        <script dangerouslySetInnerHTML={{
          __html: `
              const theme = localStorage.getItem('theme');
              if (theme === 'dark') document.documentElement.classList.add('dark');
          `
        }} />
        <ThemeProvider>
          <SoundProvider>
            <Header />
              <main className="flex-1 px-6 sm:px-10 md:px-10 lg:px-20 xl:px-40">{children}</main>
            <Footer />
          </SoundProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
