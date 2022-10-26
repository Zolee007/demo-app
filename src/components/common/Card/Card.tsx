import { Box, BoxProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

export type CardProps = BoxProps & {
  children: ReactNode;
};

const Card = ({ children, ...rest }: CardProps) => (
  <Box bg="white" boxShadow="lg" rounded="lg" overflow="hidden" {...rest}>
    {children}
  </Box>
);

export default Card;
