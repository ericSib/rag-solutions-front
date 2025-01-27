import React from 'react';
import HubSpotForm from './HubSpotForm';

const ContactForm: React.FC = () => {
  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-2xl font-heading font-bold mb-6">Contactez-nous</h2>
      <HubSpotForm
        portalId="145788507"
        formId="47abf55d-605e-4ba3-98bc-fae930a4ad83"
        className="space-y-4"
      />
    </div>
  );
};

export default ContactForm;
