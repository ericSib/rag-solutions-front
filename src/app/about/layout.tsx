import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Qui sommes-nous | RAG Solutions',
  description: 'Découvrez notre équipe et notre mission de transformer la gestion documentaire grâce à l\'intelligence artificielle.',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
