import { Box, StackProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

type LayoutProps = StackProps & {
  children: ReactNode;
};

const Layout = ({ children, ...rest }: LayoutProps) => (
  <Box minW="100vw" minH="100vh" bg="whitesmoke" {...rest}>
    {children}
  </Box>
);

export default Layout;
