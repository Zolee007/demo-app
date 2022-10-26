import { Tag, Text } from '@chakra-ui/react';

import { Order } from '../../../../../types/Order';
import OrderTypeIcon from '../../../OrderTypeIcon/OrderTypeIcon';

type OrderTagProps = {
  order: Order;
};

const OrderTag = ({ order: { type, quantity, size, stream_type } }: OrderTagProps) => (
  <Tag p="2" gap="2" alignItems="center" bg="teal.100">
    <OrderTypeIcon type={type} />
    <Text>
      {quantity} x {size}L {stream_type}
    </Text>
  </Tag>
);

export default OrderTag;
