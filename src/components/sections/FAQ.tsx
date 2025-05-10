import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/animated-section';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onToggle, index }) => {
  return (
    <AnimatedSection animation="fade-up" delay={index * 100}>
      <div className="border-b border-gray-200 py-4">
        <button
          className="flex justify-between items-center w-full text-left group"
          onClick={onToggle}
        >
          <h3 className="text-lg font-medium group-hover:text-blue-600 transition-colors">{question}</h3>
          <ChevronDown
            className={`w-5 h-5 transition-transform text-blue-600 ${
              isOpen ? 'transform rotate-180' : ''
            }`}
          />
        </button>
        <div
          className={`mt-2 text-gray-600 overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <p className="py-2">{answer}</p>
        </div>
      </div>
    </AnimatedSection>
  );
};

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs = [
    {
      question: "Qu'est-ce que la technologie RAG ?",
      answer: "La technologie RAG (Retrieval-Augmented Generation) combine la recherche d'information précise avec la génération de texte pour fournir des réponses contextualisées basées sur vos documents."
    },
    {
      question: "Comment fonctionne le double pipeline ?",
      answer: "Notre double pipeline RAG utilise d'abord un système de recherche avancé pour identifier les informations pertinentes, puis un modèle de langage pour générer des réponses précises et cohérentes."
    },
    {
      question: "Quels types de documents sont supportés ?",
      answer: "Notre solution prend en charge une large gamme de formats : PDF, Word, Excel, PowerPoint, emails, et bien d'autres. Nous pouvons aussi nous connecter à vos systèmes existants."
    },
    {
      question: "Comment est assurée la sécurité des données ?",
      answer: "Nous appliquons les meilleures pratiques de sécurité : chiffrement de bout en bout, isolation des données par client, authentification forte, et conformité RGPD. Vos données restent sous votre contrôle."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up">
          <h2 className="text-3xl font-bold text-center mb-4">Questions fréquentes</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Tout ce que vous devez savoir sur notre solution RAG
          </p>
        </AnimatedSection>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openItems.includes(index)}
              onToggle={() => toggleItem(index)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
