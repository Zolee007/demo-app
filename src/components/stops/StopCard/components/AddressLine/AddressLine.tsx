import { Box, Flex, Text } from '@chakra-ui/react';
import { FiMapPin } from 'react-icons/fi';

import { Address } from '../../../../../types/Address';
import { formatCityLine, formatStreetLine } from '../../../../../utils/addressUtils';

type AddressLineProps = {
  address: Address;
};

const AddressLine = ({ address }: AddressLineProps) => (
  <Flex alignItems="center" gap="2">
    <Box flexShrink="false">
      <FiMapPin size="24px" color="white" />
    </Box>
    <Box>
      <Text color="white">{formatStreetLine(address)}</Text>
      <Text color="white">{formatCityLine(address)}</Text>
    </Box>
  </Flex>
);

export default AddressLine;
