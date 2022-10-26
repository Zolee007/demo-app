import { Factory } from 'fishery';

import { Order } from '../../types/Order';
import { OrderType } from '../../types/OrderType';
import { Status } from '../../types/Status';

class OrderFactory extends Factory<Order> {
  constructor() {
    super(({ sequence }) => ({
      order_id: sequence.toString(),
      stream_product_id: 1,
      stream_type: 'Food waste',
      quantity: 1,
      size: 20,
      status: Status.Pending,
      type: OrderType.PickUp,
    }));
  }
}

export default OrderFactory.define(() => ({}));
