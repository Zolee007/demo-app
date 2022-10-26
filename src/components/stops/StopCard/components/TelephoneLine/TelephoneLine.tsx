import { Box, Flex, Link } from '@chakra-ui/react';
import { FiPhone } from 'react-icons/fi';

type TelephoneLineProps = {
  telephone: string;
};

const TelephoneLine = ({ telephone }: TelephoneLineProps) => (
  <Flex gap="2" alignItems="center">
    <Box flexShrink="false">
      <FiPhone size="24px" color="white" />
    </Box>
    <Link color="white" href={`tel:${telephone}`} textDecoration="underline">
      {telephone}
    </Link>
  </Flex>
);

export default TelephoneLine;
