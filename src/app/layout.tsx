import { inter, sourceSans } from '../lib/fonts'
import { ClientLayout } from '@/components/layout/ClientLayout'
import { AnimatedLayout } from '@/components/layout/animated-layout';
import '@/styles/globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'RAG Solutions - Gestion Documentaire Intelligente',
  description: 'Solutions RAG pour la gestion documentaire d\'entreprise. Transformez vos documents en intelligence actionnable.',
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
      </body>
    </html>
  )
}
