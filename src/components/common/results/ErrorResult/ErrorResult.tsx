import { CloseIcon } from '@chakra-ui/icons';
import { Box, Button, Flex } from '@chakra-ui/react';

import BaseResult from '../BaseResult';

type ResultAction = {
  title: string;
  onAction: VoidFunction;
};

type ErrorContentProps = {
  title?: string;
  detail?: string;
  action?: ResultAction;
};

const ErrorResult = ({
  title = 'Unexpected Error',
  detail = 'Oops, an unexpected error has occurred!',
  action,
}: ErrorContentProps) => (
  <BaseResult
    title={title}
    detail={detail}
    icon={
      <Box display="inline-block">
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          bg="red.500"
          rounded="50px"
          w="55px"
          h="55px"
          textAlign="center"
        >
          <CloseIcon boxSize="20px" color="white" />
        </Flex>
      </Box>
    }
  >
    {action && (
      <Button
        alignSelf="center"
        colorScheme="red"
        mt="4"
        bgGradient="linear(to-r, red.400, red.500, red.600)"
        color="white"
        variant="solid"
        onClick={action.onAction}
      >
        {action.title}
      </Button>
    )}
  </BaseResult>
);

export default ErrorResult;
