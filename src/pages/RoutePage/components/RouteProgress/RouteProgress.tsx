import { Box, Flex, Progress } from '@chakra-ui/react';

type RouteProgressProps = {
  progress: number;
};

const RouteProgress = ({ progress = 64 }: RouteProgressProps) => (
  <Box px={[4, 8]} py="4" bg="white" boxShadow="md" borderBottomRadius="8">
    <Flex justifyContent="center">
      <Progress w="100%" size="xs" value={progress} />
    </Flex>
  </Box>
);

export default RouteProgress;
