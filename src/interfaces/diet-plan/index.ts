import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface DietPlanInterface {
  id?: string;
  age: number;
  weight: number;
  height: number;
  gender: string;
  goal: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface DietPlanGetQueryInterface extends GetQueryInterface {
  id?: string;
  gender?: string;
  goal?: string;
  user_id?: string;
}
