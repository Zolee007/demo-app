import { Avatar, Box, Button, Flex, Heading } from '@chakra-ui/react';
import { FaCheck, FaDirections } from 'react-icons/fa';

import AddressLine from './components/AddressLine/AddressLine';
import TelephoneLine from './components/TelephoneLine/TelephoneLine';
import CommentLine from './components/CommentLine/CommentLine';
import Card from '../../common/Card/Card';
import TimeWindow from '../../common/TimeWindow/TimeWindow';
import OrderTagGrid from '../../orders/OrderTagGrid/OrderTagGrid';
import { Stop } from '../../../types/Stop';

type StopCardProps = {
  stop: Stop;
  onOpenItinerary: VoidFunction;
  onOpenOrders: VoidFunction;
};

const StopCard = ({
  stop: { stop_id, avatar, name, address, telephone, comment, orders, time_start, time_end },
  onOpenItinerary,
  onOpenOrders,
}: StopCardProps) => (
  <Card>
    <Box p="6" bg="blue.700">
      <Flex justifyContent="space-between" alignItems="center">
        <Flex flexDir="column" gap="2">
          <Heading size="lg" fontWeight="extrabold" color="white">
            {name}
          </Heading>
          {address && <AddressLine address={address} />}
          {telephone && <TelephoneLine telephone={telephone} />}
          {comment && <CommentLine comment={comment} />}
        </Flex>
        <Avatar size="lg" mr="8" bg="teal.400" color="white" name={name} src={avatar} />
      </Flex>
    </Box>
    <Flex px="4" my="-6" justifyContent="end">
      <TimeWindow start={time_start} end={time_end} />
    </Flex>
    <Flex flexDir="column" gap="4" p="6">
      <OrderTagGrid orders={orders} />
      <Flex mt="8" justifyContent="center" gap="4">
        <Button
          height="5rem"
          rightIcon={<FaDirections size="24px" color="white" />}
          px="16"
          colorScheme="teal"
          bg="teal.400"
          textTransform="uppercase"
          fontWeight="extrabold"
          borderRadius="3xl"
          aria-label="Open itinerary"
          onClick={onOpenItinerary}
        >
          Itinerary
        </Button>
        <Button
          height="5rem"
          rightIcon={<FaCheck size="24px" color="white" />}
          px="16"
          colorScheme="teal"
          bg="teal.400"
          textTransform="uppercase"
          fontWeight="extrabold"
          borderRadius="3xl"
          aria-label="Process order"
          onClick={onOpenOrders}
        >
          Proceed
        </Button>
      </Flex>
    </Flex>
  </Card>
);

export default StopCard;
