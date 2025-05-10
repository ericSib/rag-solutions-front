'use client';

import React from 'react';
import Script from 'next/script';

interface HubspotFormEmbedProps {
  className?: string;
}

export default function HubspotFormEmbed({ className = '' }: HubspotFormEmbedProps) {
  return (
    <>
      <Script
        src="https://js-eu1.hsforms.net/forms/embed/145788507.js"
        strategy="lazyOnload"
        defer
      />
      <div 
        className={`hs-form-frame ${className}`}
        data-region="eu1"
        data-form-id="47abf55d-605e-4ba3-98bc-fae930a4ad83"
        data-portal-id="145788507"
      />
    </>
  );
}
