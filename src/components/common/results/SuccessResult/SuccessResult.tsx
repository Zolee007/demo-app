import { CheckCircleIcon } from '@chakra-ui/icons';

import BaseResult from '../BaseResult';

type SuccessResultProps = {
  title: string;
  detail: string;
};

const SuccessResult = ({ title, detail }: SuccessResultProps) => (
  <BaseResult title={title} detail={detail} icon={<CheckCircleIcon boxSize="50px" color="green.500" />} />
);

export default SuccessResult;
