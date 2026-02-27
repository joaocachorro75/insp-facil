export interface User {
  id: number;
  username?: string;
  whatsapp?: string;
  name: string;
  role: 'admin' | 'technician';
}

export interface FormField {
  label: string;
  type: 'text' | 'number' | 'boolean' | 'select';
  options?: string[];
  required: boolean;
}

export interface InspectionType {
  id: number;
  name: string;
  schema: FormField[];
}

export interface Inspection {
  id: number;
  type_id: number;
  type_name: string;
  technician_id: number;
  technician_name: string;
  status: 'pending' | 'completed';
  location: string;
  scheduled_date: string;
  created_at: string;
  submitted_at?: string;
  schema?: FormField[];
}

export interface InspectionReport extends Inspection {
  data: Record<string, any>;
  photos: string[];
  analysis?: string;
}
