'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

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
      description: "Utilisateurs accédant aux documents",
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
        { value: "custom", label: "Sur mesure" }
      ],
      value: security,
      onChange: setSecurity
    },
    {
      title: "Fréquence d'Accès",
      description: "Nombre de recherches par mois",
      options: [
        { value: "1-10", label: "1-10 recherches" },
        { value: "10-50", label: "10-50 recherches" },
        { value: "50-200", label: "50-200 recherches" },
        { value: "200+", label: "Plus de 200 recherches" }
      ],
      value: frequency,
      onChange: setFrequency
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">
        Calculateur de ROI RAG Solutions
      </h1>
      <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        Estimez le retour sur investissement de notre solution RAG pour votre entreprise
      </p>

      <div className="max-w-3xl mx-auto">
        {step < steps.length ? (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>{steps[step].title}</CardTitle>
              <p className="text-gray-600">{steps[step].description}</p>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={steps[step].value}
                onValueChange={steps[step].onChange}
                className="space-y-4"
              >
                {steps[step].options.map((option) => (
                  <div key={option.value} className="flex items-center">
                    <RadioGroupItem value={option.value} id={option.value} />
                    <Label htmlFor={option.value} className="ml-2">
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>Résultats de l'Analyse</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-2">
                    Gain de temps estimé
                  </h3>
                  <p className="text-4xl font-bold">{results.timeSavings} jours/homme/an</p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-2">
                    Revenus additionnels potentiels
                  </h3>
                  <p className="text-4xl font-bold">{results.additionalRevenue.toLocaleString('fr-FR')} €/an</p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-2">ROI estimé</h3>
                  <p className="text-4xl font-bold">{results.roi}%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="flex justify-between mt-8">
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
            onClick={() => step < steps.length - 1 ? setStep(step + 1) : null}
          >
            {step < steps.length - 1 ? (
              <>
                Suivant
                <ChevronRight className="ml-2 h-4 w-4" />
              </>
            ) : (
              "Terminer"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
