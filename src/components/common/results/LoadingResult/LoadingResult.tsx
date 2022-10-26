import { CircularProgress } from '@chakra-ui/react';

import BaseResult from '../BaseResult';

type LoadingResultProps = {
  title?: string;
  detail?: string;
};

const LoadingResult = ({
  title = 'Loading...',
  detail = 'Hang tight, we are grabbing your data!',
}: LoadingResultProps) => (
  <BaseResult title={title} detail={detail} icon={<CircularProgress isIndeterminate color="blue.300" />} />
);

export default LoadingResult;
