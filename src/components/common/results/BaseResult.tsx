import { Box, BoxProps, Heading, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

type BaseResultProps = BoxProps & {
  title: string;
  detail: string;
  icon?: ReactNode;
  children?: ReactNode;
};

const BaseResult = ({ title, detail, icon, children, ...rest }: BaseResultProps) => (
  <Box textAlign="center" py={10} px={6} {...rest}>
    {icon}
    <Heading as="h2" size="xl" mt={6} mb={2}>
      {title}
    </Heading>
    <Text color="gray.500">{detail}</Text>
    {children}
  </Box>
);

export default BaseResult;
