'use client';

import React from 'react';
import HubspotFormEmbed from '@/components/forms/HubspotFormEmbed';

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
              Découvrez RAG Solutions en action
            </h1>
            <p className="text-xl text-gray-600">
              Remplissez le formulaire ci-dessous pour planifier une démonstration personnalisée
              de notre solution avec l'un de nos experts.
            </p>
          </div>
          
          <div className="bg-white shadow-xl rounded-xl p-8">
            <HubspotFormEmbed className="w-full" />
          </div>

          <div className="mt-12 text-center text-gray-600">
            <p className="text-sm">
              En soumettant ce formulaire, vous acceptez que RAG Solutions utilise vos informations
              conformément à notre politique de confidentialité.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
