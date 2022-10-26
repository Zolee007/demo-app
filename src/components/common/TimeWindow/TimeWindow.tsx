import { Flex, Text } from '@chakra-ui/react';
import { FiClock } from 'react-icons/fi';

import { formatTimeWindow } from '../../../utils/dateUtils';

export type StopTimeSlotProps = {
  start: string;
  end: string;
};

const TimeWindow = ({ start, end }: StopTimeSlotProps) => (
  <Flex
    width="fit-content"
    bg="white"
    alignItems="center"
    gap="2"
    p="2"
    border="2px"
    borderColor="teal.300"
    borderRadius="4"
  >
    <FiClock color="gray" />
    <Text fontWeight="bold">{formatTimeWindow(new Date(start), new Date(end))}</Text>
  </Flex>
);

export default TimeWindow;
