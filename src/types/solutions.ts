export type SolutionTier = 'starter' | 'business' | 'enterprise';

export interface Solution {
  id: string;
  title: string;
  description: string;
  tier: SolutionTier;
  features: string[];
  price: {
    amount: number;
    currency: string;
    period: 'month' | 'year';
  };
  limits?: {
    documents?: number;
    users?: number;
    storage?: string;
  };
}

export interface Sector {
  id: string;
  name: string;
  slug: string;
  description: string;
  benefits: string[];
  useCase: {
    title: string;
    description: string;
    results: {
      metric: string;
      value: string;
    }[];
  };
}

export interface Feature {
  title: string;
  description: string;
  icon?: string;
  available: SolutionTier[];
}
