export interface BaseFormData {
  email: string;
  firstname: string;
  lastname: string;
  company: string;
  message: string;
}

export interface ContactFormData extends BaseFormData {}

export interface DemoFormData extends BaseFormData {
  phone: string;
  company_size: CompanySize;
  industry: Industry;
}

export type CompanySize = 
  | '1-10'
  | '11-50'
  | '51-200'
  | '201-500'
  | '501-1000'
  | '1000+';

export type Industry =
  | 'manufacturing'
  | 'professional_services'
  | 'real_estate'
  | 'music'
  | 'customer_service'
  | 'other';

export interface FormProps {
  onSubmit: (data: BaseFormData) => Promise<void>;
  isLoading?: boolean;
  error?: string;
}
