import { Address } from './Address';
import { Order } from './Order';

export type Stop = {
  stop_id: number;
  status: number;
  name: string;
  comment?: string;
  avatar?: string;
  telephone?: string;
  address: Address;
  eta: string;
  time_start: string;
  time_end: string;
  orders: Array<Order>;
};
