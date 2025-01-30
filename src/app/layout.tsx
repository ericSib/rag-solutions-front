import { Analytics } from "@vercel/analytics/react";
import { inter, sourceSans } from '../lib/fonts'
import { ClientLayout } from '@/components/layout/ClientLayout'
import { AnimatedLayout } from '@/components/layout/animated-layout';
import '@/styles/globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'RAG Solutions - Gestion Documentaire Intelligente',
  description: 'Solutions RAG pour la gestion documentaire d\'entreprise. Transformez vos documents en intelligence actionnable.',
  metadataBase: new URL('https://ragsolutions.tech'),
  icons: {
    icon: [
      { url: '/logo.svg', type: 'image/svg+xml' },
    ],
    shortcut: ['/logo.svg'],
    apple: [
      { url: '/logo.svg' }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${sourceSans.variable}`} suppressHydrationWarning>
      <body className={`${sourceSans.className} min-h-screen flex flex-col`} suppressHydrationWarning>
        <ClientLayout>
          <AnimatedLayout>
            {children}
          </AnimatedLayout>
        </ClientLayout>
        <Analytics />
      </body>
    </html>
  )
}
