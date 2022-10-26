import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerProps,
} from '@chakra-ui/react';
import { useCallback } from 'react';

import { Stop } from '../../../../types/Stop';
import OrdersPageHeader from '../OrdersHeader/OrdersHeader';
import OrderList from '../../../../components/orders/OrderList/OrderList';
import useItemsCompletion from '../../../../hooks/useItemsCompletion';
import { Status } from '../../../../types/Status';
import { Order } from '../../../../types/Order';
import { useRouteActionContext } from '../../../../context/RouteActionContext';

type OrdersDrawerProps = Omit<DrawerProps, 'children'> & {
  stop?: Stop;
  onNext: VoidFunction;
};

const OrdersDrawer = ({ stop, onNext, onClose, ...drawerProps }: OrdersDrawerProps) => {
  const onAction = useRouteActionContext();
  const { completedCount, itemsCount } = useItemsCompletion<Order>(stop?.orders || []);

  const triggerCompleteStop = useCallback(
    (status: Status) =>
      onAction({
        type: 'update-stop-status',
        stopId: stop!.stop_id,
        status,
      }),
    [stop, onAction],
  );

  const handleNext = () => {
    triggerCompleteStop(Status.Completed);
    onNext();
  };

  return (
    <Drawer onClose={onClose} {...drawerProps}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader p="0">
          <OrdersPageHeader
            id={stop?.stop_id || 0}
            completedCount={completedCount}
            totalCount={itemsCount}
            onBack={onClose}
          />
        </DrawerHeader>
        <DrawerBody p="0">
          <Box bg="whitesmoke" height="100%" pt="4" px="2" display="flex" flexDir="column" gap="8">
            <OrderList stopId={stop?.stop_id} orders={stop?.orders} onAction={onAction} />
            <Button
              height="4rem"
              size="lg"
              colorScheme="teal"
              bg="teal.400"
              textTransform="uppercase"
              fontWeight="extrabold"
              borderRadius="3xl"
              alignSelf="center"
              onClick={handleNext}
            >
              Next stop
            </Button>
          </Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default OrdersDrawer;
