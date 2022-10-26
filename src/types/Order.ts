import { Status } from './Status';
import { OrderType } from './OrderType';

export type Order = {
  order_id: string;
  stream_product_id: number;
  stream_type: string;
  quantity: number;
  size: number;
  status: Status;
  type: OrderType;
};
