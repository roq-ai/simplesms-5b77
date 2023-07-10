import { BusinessInterface } from 'interfaces/business';
import { GetQueryInterface } from 'interfaces';

export interface MessageInterface {
  id?: string;
  phone_number: string;
  content: string;
  scheduled_date: any;
  status: string;
  business_id?: string;
  created_at?: any;
  updated_at?: any;

  business?: BusinessInterface;
  _count?: {};
}

export interface MessageGetQueryInterface extends GetQueryInterface {
  id?: string;
  phone_number?: string;
  content?: string;
  status?: string;
  business_id?: string;
}
