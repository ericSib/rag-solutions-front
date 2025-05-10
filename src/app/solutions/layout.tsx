import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Solutions - RAG Solutions',
  description: 'Découvrez nos solutions d\'intelligence documentaire adaptées à vos besoins.',
}

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {children}
    </div>
  )
}
