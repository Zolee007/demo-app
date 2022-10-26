import { Flex, Heading, IconButton, Text } from '@chakra-ui/react';
import { Stop } from '../../../../types/Stop';
import { FiArrowLeft } from 'react-icons/fi';

type OrdersHeaderProps = {
  id: Stop['stop_id'];
  completedCount: number;
  totalCount: number;
  onBack: VoidFunction;
};

const OrdersHeader = ({ id, completedCount, totalCount, onBack }: OrdersHeaderProps) => (
  <Flex width="100vw" px="4" py="2" alignItems="center" justifyContent="space-between" bg="blue.700">
    <IconButton
      aria-label="Back"
      isRound
      variant="solid"
      size="sm"
      icon={<FiArrowLeft size="24px" />}
      onClick={onBack}
    />
    <Flex flexDir="column" justifyContent="center" alignItems="center">
      <Heading size="sm" color="white">
        Review orders
      </Heading>
      <Text color="white">
        {completedCount} / {totalCount}
      </Text>
    </Flex>
    <Text fontWeight="bold" color="white">
      Stop #{id}
    </Text>
  </Flex>
);

export default OrdersHeader;
