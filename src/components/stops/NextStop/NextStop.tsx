import { Box, Flex, Text } from '@chakra-ui/react';
import { FiMapPin } from 'react-icons/fi';

import { Stop } from '../../../types/Stop';
import { formatCityLine, formatStreetLine } from '../../../utils/addressUtils';

type NextStopProps = {
  remainingCount: number;
  itemsCount: number;
  nextStop: Stop;
};

const NextStop = ({ remainingCount, itemsCount, nextStop }: NextStopProps) => (
  <Flex flexDir="column" gap="4" alignItems="center">
    <Text textTransform="uppercase" fontSize="sm" fontWeight="bold">
      {remainingCount} stop out of {itemsCount} left, here is the next stop:
    </Text>
    <Flex p="8" gap="4" bg="teal.100" borderRadius="4">
      <Box flexShrink="false">
        <FiMapPin size="24px" />
      </Box>
      <Text>
        {nextStop.name}, {formatStreetLine(nextStop.address)} {formatCityLine(nextStop.address)}
      </Text>
    </Flex>
  </Flex>
);

export default NextStop;
