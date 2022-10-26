import { Dispatch } from 'react';
import { Box } from '@chakra-ui/react';

import OrderCard from '../OrderCard/OrderCard';
import EmptyResult from '../../common/results/EmptyResult/EmptyResult';
import ErrorResult from '../../common/results/ErrorResult/ErrorResult';
import { RouteAction } from '../../../store/RouteReducer';
import { Order } from '../../../types/Order';
import { Stop } from '../../../types/Stop';

type OrderListProps = {
  stopId?: Stop['stop_id'];
  orders?: Array<Order>;
  onAction: Dispatch<RouteAction>;
};

const OrderList = ({ stopId, orders, onAction }: OrderListProps) => {
  if (!orders) {
    return <ErrorResult title="Data error" detail="Invalid data was provided" />;
  }

  if (!orders.length) {
    return <EmptyResult title="No orders" detail="The stop has no assigned orders" />;
  }

  return (
    <Box display="flex" flexDir="column" gap="4">
      {orders.map((order) => (
        <OrderCard key={order.order_id} stopId={stopId!} order={order} onAction={onAction} />
      ))}
    </Box>
  );
};

export default OrderList;
