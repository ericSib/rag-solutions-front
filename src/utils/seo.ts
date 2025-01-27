export const defaultMetadata = {
  title: 'RAG Solutions | Intelligence Documentaire pour Entreprises',
  description: 'Solutions d\'intelligence documentaire basées sur le RAG (Retrieval Augmented Generation) pour les entreprises. Optimisez la gestion de vos documents avec l\'IA.',
  keywords: 'RAG, intelligence documentaire, IA, entreprise, gestion documentaire, intelligence artificielle',
};

export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
}

export const getPageMetadata = (page: string): PageMetadata => {
  const metadata: { [key: string]: PageMetadata } = {
    home: {
      title: defaultMetadata.title,
      description: defaultMetadata.description,
      keywords: defaultMetadata.keywords,
      ogType: 'website',
    },
    about: {
      title: 'À propos | RAG Solutions',
      description: 'Découvrez notre mission et notre engagement pour révolutionner la gestion documentaire en entreprise avec l\'IA.',
      ogType: 'website',
    },
    solutions: {
      title: 'Nos Solutions | RAG Solutions',
      description: 'Explorez nos solutions d\'intelligence documentaire adaptées à vos besoins : Starter, Business et Enterprise.',
      ogType: 'website',
    },
    contact: {
      title: 'Contact | RAG Solutions',
      description: 'Contactez-nous pour en savoir plus sur nos solutions d\'intelligence documentaire et obtenir un devis personnalisé.',
      ogType: 'website',
    },
  };

  return metadata[page] || defaultMetadata;
};
