'use client';

import React from 'react';
import { PageLayout } from '@/components/layout/page-layout';
import { AnimatedSection } from '@/components/ui/animated-section';

export default function PrivacyPolicyPage() {
  return (
    <PageLayout
      title="Politique de Confidentialité"
      description="Notre engagement envers la protection de vos données personnelles"
      showCTA={false}
    >
      <section className="py-12">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="prose prose-lg max-w-4xl mx-auto">
              <h2>Introduction</h2>
              <p>
                RAG Solutions s'engage à protéger la vie privée des utilisateurs de son site web et de ses services. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations personnelles.
              </p>

              <h2>Collecte des Données</h2>
              <p>
                Nous collectons les informations que vous nous fournissez directement, notamment :
              </p>
              <ul>
                <li>Nom et prénom</li>
                <li>Adresse email professionnelle</li>
                <li>Numéro de téléphone</li>
                <li>Nom de l'entreprise</li>
              </ul>

              <h2>Utilisation des Données</h2>
              <p>
                Nous utilisons vos informations personnelles pour :
              </p>
              <ul>
                <li>Fournir et améliorer nos services</li>
                <li>Communiquer avec vous concernant nos services</li>
                <li>Personnaliser votre expérience utilisateur</li>
                <li>Répondre à vos demandes et questions</li>
              </ul>

              <h2>Protection des Données</h2>
              <p>
                Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos informations personnelles contre tout accès, modification, divulgation ou destruction non autorisés.
              </p>

              <h2>Partage des Données</h2>
              <p>
                Nous ne vendons pas vos informations personnelles à des tiers. Nous pouvons partager vos informations avec des prestataires de services tiers qui nous aident à exploiter notre site web et à fournir nos services.
              </p>

              <h2>Vos Droits</h2>
              <p>
                Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :
              </p>
              <ul>
                <li>Droit d'accès</li>
                <li>Droit de rectification</li>
                <li>Droit à l'effacement</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité des données</li>
                <li>Droit d'opposition</li>
              </ul>

              <h2>Contact</h2>
              <p>
                Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, veuillez nous contacter à :
                <br />
                Email : <a href="mailto:privacy@ragsolutions.tech">privacy@ragsolutions.tech</a>
                <br />
                Téléphone : +33 (0)6 50 04 17 16
              </p>

              <h2>Modifications</h2>
              <p>
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications entrent en vigueur dès leur publication sur notre site web.
              </p>

              <p className="text-sm text-gray-600 mt-8">
                Dernière mise à jour : 28 janvier 2025
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
}
