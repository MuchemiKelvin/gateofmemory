import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Gate of Memory',
  description: 'Preserve and celebrate the memories of your loved ones.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + ' bg-black min-h-screen'}>
        <nav className="w-full bg-neutral-900 shadow-lg border-b border-yellow-700 flex items-center justify-center py-4 mb-8 z-10">
          <div className="flex gap-8 text-lg font-semibold text-yellow-100">
            <Link href="/" className="hover:text-yellow-400 transition">Home</Link>
            <Link href="/scan" className="hover:text-yellow-400 transition">Scan QR</Link>
            <Link href="/admin" className="hover:text-yellow-400 transition">Admin</Link>
            <Link href="/memorial/KGV-KSM-2024-0112" className="hover:text-yellow-400 transition">Sample Memorial</Link>
          </div>
        </nav>
        <main className="flex flex-col items-center justify-center w-full">{children}</main>
      </body>
    </html>
  );
}
