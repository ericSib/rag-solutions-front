'use client';

import React, { useEffect } from 'react';
import Script from 'next/script';

interface HubSpotFormProps {
  region?: string;
  portalId: string;
  formId: string;
  className?: string;
}

const HubSpotForm: React.FC<HubSpotFormProps> = ({
  region = 'eu1',
  portalId,
  formId,
  className = '',
}) => {
  useEffect(() => {
    // Recharge le formulaire HubSpot si le composant est monté
    const { hbspt } = window as any;
    if (hbspt) {
      hbspt.forms.create({
        region: region,
        portalId: portalId,
        formId: formId,
        target: `#hubspot-form-${formId}`,
      });
    }
  }, [region, portalId, formId]);

  return (
    <>
      <Script
        src={`https://js-${region}.hsforms.net/forms/embed/${portalId}.js`}
        strategy="lazyOnload"
      />
      <div
        id={`hubspot-form-${formId}`}
        className={`hubspot-form-container ${className}`}
        data-region={region}
        data-portal-id={portalId}
        data-form-id={formId}
      />
    </>
  );
};

export default HubSpotForm;
