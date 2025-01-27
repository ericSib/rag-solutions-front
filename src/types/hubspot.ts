export interface HubSpotFormProps {
  region?: string;
  portalId: string;
  formId: string;
  className?: string;
}

export interface HubSpotWindow extends Window {
  hbspt?: {
    forms: {
      create: (config: {
        region: string;
        portalId: string;
        formId: string;
        target: string;
      }) => void;
    };
  };
}

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (config: {
          region: string;
          portalId: string;
          formId: string;
          target: string;
        }) => void;
      };
    };
  }
}
