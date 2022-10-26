import { Box, Flex, Text } from '@chakra-ui/react';
import { FiMessageSquare } from 'react-icons/fi';

type CommentLineProps = {
  comment: string;
};

const CommentLine = ({ comment }: CommentLineProps) => (
  <Flex alignItems="center" gap="2">
    <Box flexShrink="false">
      <FiMessageSquare size="24px" color="white" />
    </Box>
    <Text color="white">{comment}</Text>
  </Flex>
);

export default CommentLine;
