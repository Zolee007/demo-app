import { Box, BoxProps, Divider, Flex, Heading, IconButton } from '@chakra-ui/react';
import { RouteResponse } from '../../../../types/RouteResponse';
import { FiAlignLeft, FiList } from 'react-icons/fi';
import RouteProgress from '../RouteProgress/RouteProgress';

type RouteHeaderProps = BoxProps & {
  name?: RouteResponse['name'];
  progress: number;
  isCompleted: boolean;
  onOpenItinerary: VoidFunction;
};

const RouteHeader = ({ name = 'Unknown route', progress, onOpenItinerary, isCompleted }: RouteHeaderProps) => (
  <Box position="fixed" zIndex="50">
    <Flex width="100vw" px="4" py="2" alignItems="center" justifyContent="space-between" bg="white">
      <IconButton aria-label="Open details" icon={<FiAlignLeft />} isRound variant="outline" isDisabled />
      <Heading size="md">Route {name}</Heading>
      <IconButton
        aria-label={'Open route list'}
        icon={<FiList />}
        isRound
        variant="outline"
        isDisabled={!name || isCompleted}
        onClick={onOpenItinerary}
      />
    </Flex>
    <Divider />
    <RouteProgress progress={progress} />
  </Box>
);

export default RouteHeader;
