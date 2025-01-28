import { inter, sourceSans } from '../lib/fonts'
import ClientLayout from '@/components/layout/ClientLayout'
import '@/styles/globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'RAG Solutions | Intelligence Documentaire pour Entreprises',
  description: 'Solutions d\'intelligence documentaire basées sur le RAG (Retrieval Augmented Generation) pour les entreprises.',
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
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
