import { Flex, Text } from '@chakra-ui/react';

import OrderTypeIcon from '../OrderTypeIcon/OrderTypeIcon';
import { Order } from '../../../types/Order';
import { OrderType } from '../../../types/OrderType';

type OrderTypeNameProps = {
  type: Order['type'];
};

const OrderTypeName = ({ type }: OrderTypeNameProps) => (
  <Flex flexDir="row" alignItems="center" gap="2">
    <Text textTransform="uppercase" fontWeight="bold">
      {type === OrderType.PickUp && 'Pickup'}
      {type === OrderType.DropOff && 'Placement'}
    </Text>
    <OrderTypeIcon size="24px" type={type} />
  </Flex>
);

export default OrderTypeName;
