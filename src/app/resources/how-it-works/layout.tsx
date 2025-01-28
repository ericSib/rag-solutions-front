import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Comment ça marche | RAG Solutions',
  description: 'Découvrez le fonctionnement de notre technologie RAG (Retrieval-Augmented Generation) et comment elle transforme la gestion documentaire.',
  openGraph: {
    title: 'Comment ça marche | RAG Solutions',
    description: 'Découvrez le fonctionnement de notre technologie RAG (Retrieval-Augmented Generation) et comment elle transforme la gestion documentaire.',
    images: [
      {
        url: '/images/how-it-works-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Comment fonctionne RAG Solutions',
      },
    ],
  },
};

export default function HowItWorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
