import { Box, Flex, useDisclosure } from '@chakra-ui/react';
import { useCallback, useEffect, useReducer, useState } from 'react';

import useRouteQuery from './hooks/useRouteQuery';
import RouteHeader from './components/RouteHeader/RouteHeader';
import Layout from '../../layouts/Layout';
import EmptyResult from '../../components/common/results/EmptyResult/EmptyResult';
import LoadingResult from '../../components/common/results/LoadingResult/LoadingResult';
import ErrorResult from '../../components/common/results/ErrorResult/ErrorResult';
import SuccessResult from '../../components/common/results/SuccessResult/SuccessResult';
import StopCard from '../../components/stops/StopCard/StopCard';
import { Stop } from '../../types/Stop';
import useItemsCompletion from '../../hooks/useItemsCompletion';
import StopsDrawer from './components/StopsDrawer/StopsDrawer';
import OrdersDrawer from './components/OrdersDrawer/OrdersDrawer';
import NextStop from '../../components/stops/NextStop/NextStop';
import routeReducer, { DefaultRouteState } from '../../store/RouteReducer';
import { RouteActionContextProvider } from '../../context/RouteActionContext';

const RoutePage = () => {
  const { data, isLoading, isError, isSuccess, refetch } = useRouteQuery({
    onSuccess: (data) => {
      dispatch({ type: 'set-state', route: data });
    },
  });
  const { isOpen: isItineraryOpen, onOpen: handleOpenItinerary, onClose: handleCloseItinerary } = useDisclosure();
  const { isOpen: isOrdersOpen, onOpen: handleOpenOrders, onClose: handleCloseOrders } = useDisclosure();

  const [state, dispatch] = useReducer(routeReducer, DefaultRouteState);
  const stops = state.stops;
  const [selectedStopId, setSelectedStopId] = useState<Stop['stop_id'] | undefined>();
  const selectedStop = stops.find((s) => s.stop_id === selectedStopId);

  const { nextItem, remainingCount, itemsCount, progress, isEmpty, isCompleted } = useItemsCompletion<Stop>(stops);

  const handleSelectStop = useCallback(
    (stopId?: Stop['stop_id']) => {
      if (isItineraryOpen) {
        handleCloseItinerary();
      }
      setSelectedStopId(stops.find((s) => s.stop_id === stopId)?.stop_id);
    },
    [isItineraryOpen, handleCloseItinerary, setSelectedStopId, stops],
  );

  const handleSelectNextStop = () => {
    handleCloseOrders();
    handleSelectStop(nextItem?.stop_id);
  };

  useEffect(() => {
    setSelectedStopId(nextItem?.stop_id);
  }, [nextItem, setSelectedStopId]);

  return (
    <RouteActionContextProvider value={dispatch}>
      <Layout>
        <RouteHeader
          name={state.name}
          progress={progress}
          onOpenItinerary={handleOpenItinerary}
          isCompleted={isCompleted}
        />
        <Box height="100%" pt="28" px="6">
          {isLoading && <LoadingResult />}
          {isError && <ErrorResult action={{ title: 'Retry', onAction: () => refetch() }} />}
          {isSuccess && isEmpty && (
            <EmptyResult title="Empty route" detail="This route doesn't have any stops assigned to it" />
          )}
          {isSuccess && !isEmpty && isCompleted && (
            <SuccessResult title="Route completed" detail="Good job, all stops has been completed!" />
          )}
          {selectedStop && (
            <Flex flexDir="column" gap="8">
              <StopCard stop={selectedStop} onOpenOrders={handleOpenOrders} onOpenItinerary={handleOpenItinerary} />
              {nextItem && <NextStop remainingCount={remainingCount} itemsCount={itemsCount} nextStop={nextItem} />}
            </Flex>
          )}
        </Box>
        <StopsDrawer
          size="md"
          placement="right"
          isOpen={isItineraryOpen}
          onClose={handleCloseItinerary}
          selectedStopId={selectedStopId}
          nextStopId={nextItem?.stop_id}
          stops={stops}
          onStopSelected={handleSelectStop}
        />
        <OrdersDrawer
          size="full"
          placement="bottom"
          isOpen={isOrdersOpen}
          onClose={handleCloseOrders}
          stop={selectedStop}
          onNext={handleSelectNextStop}
        />
      </Layout>
    </RouteActionContextProvider>
  );
};

export default RoutePage;
