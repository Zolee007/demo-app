import { Flex, IconButton, Text } from '@chakra-ui/react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { useCounter } from 'usehooks-ts';

type CounterProps = {
  count: number;
  onCountChanged: (count: number) => void;
};

const Counter = ({ count: initialCount, onCountChanged }: CounterProps) => {
  const { count, increment, decrement } = useCounter(initialCount);

  const handleIncrement = () => {
    onCountChanged(count + 1);
    increment();
  };

  const handleDecrement = () => {
    if (count === 0) {
      return;
    }

    onCountChanged(count - 1);
    decrement();
  };

  return (
    <Flex gap="4" alignItems="center">
      <IconButton
        colorScheme="teal"
        bg="teal.400"
        size="md"
        isRound
        aria-label="Minus"
        icon={<FaMinus />}
        isDisabled={count === 0}
        onClick={handleDecrement}
      />
      <Text fontSize="2xl">{count}</Text>
      <IconButton
        colorScheme="teal"
        bg="teal.400"
        size="md"
        isRound
        aria-label="Plus"
        icon={<FaPlus />}
        isDisabled={count === 9}
        onClick={handleIncrement}
      />
    </Flex>
  );
};

export default Counter;
