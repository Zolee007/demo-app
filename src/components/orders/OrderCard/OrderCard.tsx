import { Box, Flex, Heading, IconButton, Text } from '@chakra-ui/react';
import { Dispatch, useCallback, useState } from 'react';
import { AiOutlineWarning } from 'react-icons/ai';
import { FiCheck, FiX } from 'react-icons/fi';

import Card from '../../common/Card/Card';
import DesignBar from './components/DesignBar/DesignBar';
import Counter from '../../common/Counter/Counter';
import OrderTypeName from '../OrderTypeName/OrderTypeName';
import { RouteAction } from '../../../store/RouteReducer';
import { Order } from '../../../types/Order';
import { Status } from '../../../types/Status';
import { Stop } from '../../../types/Stop';

type OrderInternalState = 'completed' | 'reported' | 'none';

type OrderCardProps = {
  stopId: Stop['stop_id'];
  order: Order;
  onAction: Dispatch<RouteAction>;
};

const OrderCard = ({
  stopId,
  order: { order_id, stream_type, size, type, quantity, status },
  onAction,
}: OrderCardProps) => {
  const [internalState, setInternalState] = useState<OrderInternalState>(
    status === Status.Completed ? 'completed' : status === Status.CompletedWithIssueReport ? 'reported' : 'none',
  );

  const updateOrderStatus = useCallback(
    (status: Status) =>
      onAction({
        type: 'update-stop-order-status',
        stopId,
        orderId: order_id,
        status,
      }),
    [onAction, stopId, order_id],
  );

  const handleReportIssue = () => {
    setInternalState('reported');
    updateOrderStatus(Status.CompletedWithIssueReport);
  };

  const handleCompleteOrder = useCallback(() => {
    setInternalState('completed');
    updateOrderStatus(Status.Completed);
  }, [setInternalState, updateOrderStatus]);

  const updateOrderQuantity = useCallback(
    (quantity: number) =>
      onAction({
        type: 'update-stop-order-quantity',
        stopId,
        orderId: order_id,
        quantity,
      }),
    [onAction, stopId, order_id],
  );

  const handleUpdateQuantity = (q: number) => {
    updateOrderQuantity(q);
    if (q !== quantity) {
      setInternalState('reported');
      updateOrderStatus(Status.CompletedWithIssueReport);
    }
  };

  return (
    <Card display="flex" flexDir="row">
      <DesignBar />
      <Box p="4" width="100%">
        <Flex justifyContent="space-between" alignItems="center">
          <Box>
            <Flex gap="2" alignItems="center">
              <Heading size="md">{stream_type}</Heading>
              <Text>{size}L</Text>
            </Flex>
            <Text color="gray.400" fontSize="sm" mt="2">
              Adjust quantity (if needed)
            </Text>
          </Box>
          <OrderTypeName type={type} />
        </Flex>
        <Flex justifyContent="space-between" mt="4">
          <Counter count={quantity} onCountChanged={handleUpdateQuantity} />
          <Flex gap="2">
            <IconButton
              size="lg"
              variant={internalState === 'reported' ? 'solid' : 'outline'}
              colorScheme="yellow"
              isRound
              aria-label="Report issue"
              icon={<AiOutlineWarning size="24px" />}
              onClick={handleReportIssue}
            />
            <IconButton
              size="lg"
              variant={internalState === 'completed' ? 'solid' : 'outline'}
              colorScheme="teal"
              bg={internalState === 'completed' ? 'teal.400' : 'inherit'}
              isRound
              aria-label="Complete order"
              icon={internalState === 'reported' ? <FiX size="24px" /> : <FiCheck size="24px" />}
              onClick={handleCompleteOrder}
            />
          </Flex>
        </Flex>
      </Box>
    </Card>
  );
};

export default OrderCard;
