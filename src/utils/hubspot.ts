import { Client } from '@hubspot/api-client';

const hubspotClient = new Client({ accessToken: process.env.HUBSPOT_ACCESS_TOKEN });

export interface ContactFormData {
  email: string;
  firstname: string;
  lastname: string;
  company: string;
  message: string;
}

export interface DemoFormData extends ContactFormData {
  phone: string;
  company_size: string;
  industry: string;
}

export const submitContactForm = async (data: ContactFormData) => {
  try {
    const response = await hubspotClient.crm.contacts.basicApi.create({
      properties: {
        email: data.email,
        firstname: data.firstname,
        lastname: data.lastname,
        company: data.company,
        message: data.message,
        lifecycle_stage: 'lead',
      },
    });
    return response;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
};

export const submitDemoForm = async (data: DemoFormData) => {
  try {
    const response = await hubspotClient.crm.contacts.basicApi.create({
      properties: {
        email: data.email,
        firstname: data.firstname,
        lastname: data.lastname,
        company: data.company,
        phone: data.phone,
        company_size: data.company_size,
        industry: data.industry,
        message: data.message,
        lifecycle_stage: 'opportunity',
      },
    });
    return response;
  } catch (error) {
    console.error('Error submitting demo form:', error);
    throw error;
  }
};
