import { Box } from '@chakra-ui/react';
import { FaFingerprint } from 'react-icons/fa';

const DesignBar = () => (
  <Box bg="orange.300">
    <Box ml="4" bg="white" height="4">
      &nbsp;
    </Box>
    <Box ml="4" mb="-1" borderRadius="0% 0% 0% 75%" bg="white">
      &nbsp;
    </Box>
    <Box bg="white">
      <Box ml="-0.5" p="2" bg="orange.300" borderRadius="0% 50% 50% 0%" h="fit-content">
        <FaFingerprint color="white" size="20px" />
      </Box>
    </Box>
    <Box ml="4" mt="-1" borderRadius="75% 0% 0% 0%" bg="white">
      &nbsp;
    </Box>
    <Box ml="4" bg="white" height="full">
      &nbsp;
    </Box>
  </Box>
);

export default DesignBar;
