import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/navbar';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Autofipe - Consulta em massa da Tabela Fipe',
  description: 'Criado por Bruno Wanderson.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-full min-h-screen bg-white">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
