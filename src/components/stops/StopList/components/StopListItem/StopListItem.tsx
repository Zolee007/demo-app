import { MdCheckCircle } from 'react-icons/md';

import useItemsCompletion from '../../../../../hooks/useItemsCompletion';
import { Order } from '../../../../../types/Order';
import {
  Divider,
  Flex,
  Heading,
  ListIcon,
  ListItem,
  ListItemProps,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Tag,
} from '@chakra-ui/react';
import { Status } from '../../../../../types/Status';
import { formatTimeWindow } from '../../../../../utils/dateUtils';
import { Stop } from '../../../../../types/Stop';

type StopListItemProps = ListItemProps & {
  stop: Stop;
  isSelected: boolean;
  isNext: boolean;
  onSelectStop: (stopId: Stop['stop_id']) => void;
};

const StopListItem = ({ isNext, isSelected, stop, onSelectStop, ...listItemProps }: StopListItemProps) => {
  const { completedCount, itemsCount } = useItemsCompletion<Order>(stop.orders);

  return (
    <ListItem
      p="4"
      bg={isSelected ? 'teal.100' : 'inherit'}
      borderRadius="4"
      {...listItemProps}
      onClick={() => onSelectStop(stop.stop_id)}
      _hover={{
        bg: 'teal.200',
      }}
    >
      <Flex alignItems="center">
        <Flex flexDir="column">
          <Heading as="h4" size="md">
            {stop.name}{' '}
            {isNext && (
              <Tag colorScheme="teal" bg="teal.400" color="white">
                Next
              </Tag>
            )}{' '}
            {stop.status === Status.Completed && (
              <ListIcon
                size="48px"
                as={MdCheckCircle}
                color={stop.status === Status.Completed ? 'green.300' : 'gray.300'}
              />
            )}
          </Heading>
          <Stat>
            <StatLabel>Orders</StatLabel>
            <StatNumber>
              <Flex gap="2" alignItems="center">
                {completedCount} / {itemsCount}
              </Flex>
            </StatNumber>
            <StatHelpText>{formatTimeWindow(new Date(stop.time_start), new Date(stop.time_end))}</StatHelpText>
          </Stat>
        </Flex>
      </Flex>
      <Divider />
    </ListItem>
  );
};

export default StopListItem;
