'use client';

import React from 'react';
import { PageLayout } from '@/components/layout/page-layout';
import { AnimatedSection } from '@/components/ui/animated-section';

export default function TermsOfServicePage() {
  return (
    <PageLayout
      title="Conditions d'Utilisation"
      description="Les termes et conditions régissant l'utilisation de nos services"
      showCTA={false}
    >
      <section className="py-12">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="prose prose-lg max-w-4xl mx-auto">
              <h2>1. Acceptation des Conditions</h2>
              <p>
                En accédant et en utilisant les services de RAG Solutions, vous acceptez d'être lié par ces conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser nos services.
              </p>

              <h2>2. Description des Services</h2>
              <p>
                RAG Solutions fournit des solutions de gestion documentaire basées sur l'intelligence artificielle, permettant aux entreprises de :
              </p>
              <ul>
                <li>Organiser et gérer leurs documents de manière efficace</li>
                <li>Rechercher et accéder rapidement à l'information</li>
                <li>Collaborer sur des documents en temps réel</li>
                <li>Sécuriser leurs données sensibles</li>
              </ul>

              <h2>3. Utilisation des Services</h2>
              <p>
                Vous vous engagez à :
              </p>
              <ul>
                <li>Fournir des informations exactes et à jour</li>
                <li>Maintenir la confidentialité de vos identifiants</li>
                <li>Utiliser les services conformément aux lois applicables</li>
                <li>Ne pas utiliser les services à des fins illégales ou non autorisées</li>
              </ul>

              <h2>4. Propriété Intellectuelle</h2>
              <p>
                Tous les droits de propriété intellectuelle liés aux services sont la propriété exclusive de RAG Solutions. Vous ne pouvez pas :
              </p>
              <ul>
                <li>Copier ou reproduire nos services sans autorisation</li>
                <li>Modifier ou créer des œuvres dérivées</li>
                <li>Supprimer les mentions de droits d'auteur</li>
              </ul>

              <h2>5. Confidentialité</h2>
              <p>
                Nous nous engageons à protéger vos données conformément à notre politique de confidentialité. En utilisant nos services, vous acceptez notre traitement de vos données tel que décrit dans notre politique de confidentialité.
              </p>

              <h2>6. Limitation de Responsabilité</h2>
              <p>
                RAG Solutions ne peut être tenu responsable des dommages directs ou indirects résultant de l'utilisation ou de l'impossibilité d'utiliser nos services.
              </p>

              <h2>7. Modifications des Services</h2>
              <p>
                Nous nous réservons le droit de modifier, suspendre ou interrompre tout aspect de nos services à tout moment, avec ou sans préavis.
              </p>

              <h2>8. Résiliation</h2>
              <p>
                Nous pouvons résilier ou suspendre votre accès à nos services immédiatement, sans préavis ni responsabilité, pour quelque raison que ce soit.
              </p>

              <h2>9. Loi Applicable</h2>
              <p>
                Ces conditions sont régies par les lois françaises. Tout litige sera soumis à la juridiction exclusive des tribunaux français.
              </p>

              <h2>10. Contact</h2>
              <p>
                Pour toute question concernant ces conditions d'utilisation, veuillez nous contacter à :
                <br />
                Email : <a href="mailto:legal@ragsolutions.tech">legal@ragsolutions.tech</a>
                <br />
                Téléphone : +33 (0)6 50 04 17 16
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
