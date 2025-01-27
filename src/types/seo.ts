export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  ogUrl?: string;
  canonical?: string;
}

export interface PageSEO {
  metadata: SEOMetadata;
  structuredData?: object;
}

export interface BreadcrumbItem {
  label: string;
  href: string;
  current?: boolean;
}
