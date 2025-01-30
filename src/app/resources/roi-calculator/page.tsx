'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { Container } from '@/components/Container';
import { PageHeader } from '@/components/PageHeader';

export default function ROICalculatorPage() {
  const [step, setStep] = useState(0);
  const [volume, setVolume] = useState('10-50');
  const [complexity, setComplexity] = useState('2');
  const [users, setUsers] = useState('1-10');
  const [security, setSecurity] = useState('standard');
  const [frequency, setFrequency] = useState('10-50');

  const calculateROI = () => {
    // Logique de calcul du ROI en fonction des paramètres
    const timeSavings = 50; // En jours/homme/an
    const additionalRevenue = 120000; // En €/an
    return {
      timeSavings,
      additionalRevenue,
      roi: (additionalRevenue / 50000 * 100).toFixed(0) // ROI en pourcentage
    };
  };

  const results = calculateROI();

  const steps = [
    {
      title: "Volume Documentaire",
      description: "Nombre de documents traités par mois",
      options: [
        { value: "1-10", label: "1-10 documents" },
        { value: "10-50", label: "10-50 documents" },
        { value: "50-200", label: "50-200 documents" },
        { value: "200+", label: "Plus de 200 documents" }
      ],
      value: volume,
      onChange: setVolume
    },
    {
      title: "Complexité des Documents",
      description: "Niveau moyen de complexité",
      options: [
        { value: "1", label: "Simple (1-5 pages)" },
        { value: "2", label: "Moyen (5-20 pages)" },
        { value: "3", label: "Complexe (20+ pages)" }
      ],
      value: complexity,
      onChange: setComplexity
    },
    {
      title: "Nombre d'Utilisateurs",
      description: "Utilisateurs qui accèderont au système",
      options: [
        { value: "1-10", label: "1-10 utilisateurs" },
        { value: "10-50", label: "10-50 utilisateurs" },
        { value: "50+", label: "Plus de 50 utilisateurs" }
      ],
      value: users,
      onChange: setUsers
    },
    {
      title: "Niveau de Sécurité",
      description: "Exigences en matière de sécurité",
      options: [
        { value: "standard", label: "Standard" },
        { value: "advanced", label: "Avancé" },
        { value: "custom", label: "Personnalisé" }
      ],
      value: security,
      onChange: setSecurity
    },
    {
      title: "Fréquence d'Utilisation",
      description: "Nombre de recherches par mois",
      options: [
        { value: "1-10", label: "1-10 recherches" },
        { value: "10-50", label: "10-50 recherches" },
        { value: "50+", label: "Plus de 50 recherches" }
      ],
      value: frequency,
      onChange: setFrequency
    }
  ];

  const currentStep = steps[step];

  return (
    <>
      <PageHeader
        title="Calculateur de ROI RAG Solutions"
        description="Estimez le retour sur investissement de notre solution RAG pour votre entreprise"
      />
      <Container className="mt-16 sm:mt-20">
        <div className="mx-auto max-w-2xl">
          {step < steps.length ? (
            <Card>
              <CardHeader>
                <CardTitle>{currentStep.title}</CardTitle>
                <p className="text-sm text-gray-600 mt-1">
                  {currentStep.description}
                </p>
              </CardHeader>
              <CardContent>
                <RadioGroup
                  value={currentStep.value}
                  onValueChange={currentStep.onChange}
                  className="gap-4"
                >
                  {currentStep.options.map((option) => (
                    <div key={option.value} className="flex items-center space-x-2">
                      <RadioGroupItem value={option.value} id={option.value} />
                      <Label htmlFor={option.value}>{option.label}</Label>
                    </div>
                  ))}
                </RadioGroup>
                <div className="mt-6 flex justify-between">
                  {step > 0 && (
                    <Button
                      variant="outline"
                      onClick={() => setStep(step - 1)}
                    >
                      Précédent
                    </Button>
                  )}
                  <Button
                    className="ml-auto"
                    onClick={() => setStep(step + 1)}
                  >
                    {step === steps.length - 1 ? 'Calculer' : 'Suivant'}
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Résultats</CardTitle>
                <p className="text-sm text-gray-600 mt-1">
                  Voici l'estimation de votre retour sur investissement
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold">Gain de temps</h3>
                    <p className="text-2xl font-bold text-blue-600">{results.timeSavings} jours/homme/an</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Revenus additionnels</h3>
                    <p className="text-2xl font-bold text-blue-600">{results.additionalRevenue.toLocaleString()}€/an</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">ROI estimé</h3>
                    <p className="text-2xl font-bold text-blue-600">{results.roi}%</p>
                  </div>
                  <Button
                    className="w-full"
                    onClick={() => setStep(0)}
                  >
                    Recommencer
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </Container>
    </>
  );
}
