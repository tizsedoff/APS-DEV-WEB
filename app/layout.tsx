import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'APS Developer | Software Corporativo Premium',
  description: 'Landing page de APS Developer: desarrollo web, sistemas empresariales y plataformas educativas con estilo premium.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
