import { Status } from './Status';
import { Address } from './Address';
import { Order } from './Order';

export type Depot = {
  status: Status;
  orgloc_id: string;
  name: string;
  avatar?: string;
  telephone?: string;
  address: Address;
  time_start: string;
  time_end: string;
  orders: Array<Order>;
  dropoff: boolean;
};
