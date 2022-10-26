import { Badge, HStack, Stack, StackProps, Text, Wrap, WrapItem } from '@chakra-ui/react';

import OrderTag from './components/OrderTag/OrderTag';
import { Order } from '../../../types/Order';

type OrderTagCloudProps = StackProps & {
  orders: Array<Order>;
};

const OrderTagGrid = ({ orders, ...rest }: OrderTagCloudProps) => (
  <Stack {...rest}>
    <HStack alignItems="center">
      <Text textTransform="uppercase" fontWeight="bold" color="gray.400">
        Orders
      </Text>
      <Badge bg="teal.100" borderRadius="4">
        {orders.length || 0}
      </Badge>
    </HStack>
    <Wrap spacing="2">
      {orders.map((order) => (
        <WrapItem key={order.order_id}>
          <OrderTag order={order} />
        </WrapItem>
      ))}
    </Wrap>
  </Stack>
);

export default OrderTagGrid;
