import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'WaveZ Club',
  description: 'Welcome to the WiveZ Club official website.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=PT+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
<body className="bg-background font-body antialiased w-screen h-screen m-0 p-0 overflow-auto">
  <div className="relative flex min-h-screen flex-col mx-2">
    <Header />
    <main className="flex-1 flex flex-col w-full">
      {children}
    </main>
    <Footer />
  </div>
  <Toaster />
</body>

    </html>
  );
}
