import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'wouter';

const ROICalculator = () => {
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
    const customerSatisfaction = 30; // En % d'augmentation
    const roiDelay = 6; // En mois

    return {
      timeSavings,
      additionalRevenue,
      customerSatisfaction,
      roiDelay
    };
  };

  const steps = [
    {
      title: "Volume de documents",
      input: (
        <RadioGroup value={volume} onValueChange={setVolume} className="space-y-2">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="10-50" id="vol-1" />
            <Label htmlFor="vol-1">De 10 000 à 50 000 pages</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="50-100" id="vol-2" />
            <Label htmlFor="vol-2">De 50 000 à 100 000 pages</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="100+" id="vol-3" />
            <Label htmlFor="vol-3">Plus de 100 000 pages</Label>
          </div>
        </RadioGroup>
      ),
    },
    {
      title: "Complexité des documents",
      input: (
        <RadioGroup value={complexity} onValueChange={setComplexity} className="space-y-2">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="1" id="comp-1" />
            <Label htmlFor="comp-1">1 - Faible</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="2" id="comp-2" />
            <Label htmlFor="comp-2">2 - Moyenne</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="3" id="comp-3" />
            <Label htmlFor="comp-3">3 - Élevée</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="4" id="comp-4" />
            <Label htmlFor="comp-4">4 - Critique</Label>
          </div>
        </RadioGroup>
      ),
    },
    {
      title: "Nombre d'utilisateurs",
      input: (
        <RadioGroup value={users} onValueChange={setUsers} className="space-y-2">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="1-10" id="users-1" />
            <Label htmlFor="users-1">De 1 à 10 utilisateurs</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="10-50" id="users-2" />
            <Label htmlFor="users-2">De 10 à 50 utilisateurs</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="50+" id="users-3" />
            <Label htmlFor="users-3">Plus de 50 utilisateurs</Label>
          </div>
        </RadioGroup>
      ),
    },
    {
      title: "Niveau de sécurité",
      input: (
        <RadioGroup value={security} onValueChange={setSecurity} className="space-y-2">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="standard" id="sec-1" />
            <Label htmlFor="sec-1">Standard</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="high" id="sec-2" />
            <Label htmlFor="sec-2">Élevé</Label>
          </div>
        </RadioGroup>
      ),
    },
    {
      title: "Fréquence d'utilisation",
      input: (
        <RadioGroup value={frequency} onValueChange={setFrequency} className="space-y-2">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="10-50" id="freq-1" />
            <Label htmlFor="freq-1">De 10 à 50 requêtes/jour</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="50-100" id="freq-2" />
            <Label htmlFor="freq-2">De 50 à 100 requêtes/jour</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="100+" id="freq-3" />
            <Label htmlFor="freq-3">Plus de 100 requêtes/jour</Label>
          </div>
        </RadioGroup>
      ),
    },
    {
      title: "Votre ROI RAG Solution",
      input: (
        <div>
          <h3 className="text-xl font-semibold mb-2">
            En adoptant RAG Solutions, votre entreprise pourrait :  
          </h3>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            <li>
              Économiser {calculateROI().timeSavings} jours/homme par an
            </li>
            <li>
              Générer {calculateROI().additionalRevenue.toLocaleString()} € de CA additionnel
            </li>
            <li>
              Augmenter la satisfaction client de {calculateROI().customerSatisfaction}%
            </li>
            <li>
              Atteindre un ROI positif en seulement {calculateROI().roiDelay} mois
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Helmet>
        <title>Calculateur ROI | RAG Solutions</title>
        <meta
          name="description"
          content="Calculez votre retour sur investissement avec RAG Solutions. Notre calculateur vous permet d'estimer les gains en efficacité et en productivité."
        />
      </Helmet>
      <div className="w-full max-w-xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">
              Votre potentiel avec RAG Solutions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">
                  {steps[step].title}
                </h2>
                {steps[step].input}
              </div>
              <div className="flex justify-between">
                {step > 0 && (
                  <Button
                    variant="ghost"
                    onClick={() => setStep(step - 1)}
                  >
                    Précédent
                  </Button>
                )}
                {step < steps.length - 1 ? (
                  <Button onClick={() => setStep(step + 1)}>
                    Suivant
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Link href="/demo">
                    <Button>
                      Demandez une démo
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            {step + 1} / {steps.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ROICalculator;