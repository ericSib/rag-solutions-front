import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demander une démo | RAG Solutions',
  description: 'Découvrez comment RAG Solutions peut transformer votre gestion documentaire. Demandez une démo personnalisée.',
  openGraph: {
    title: 'Demander une démo | RAG Solutions',
    description: 'Découvrez comment RAG Solutions peut transformer votre gestion documentaire. Demandez une démo personnalisée.',
    images: [
      {
        url: '/images/demo-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Démonstration RAG Solutions',
      },
    ],
  },
};

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
