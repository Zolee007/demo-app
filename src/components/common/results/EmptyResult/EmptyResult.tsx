import { WarningTwoIcon } from '@chakra-ui/icons';

import BaseResult from '../BaseResult';

type EmptyResultProps = {
  title: string;
  detail: string;
};

const EmptyResult = ({ title, detail }: EmptyResultProps) => (
  <BaseResult title={title} detail={detail} icon={<WarningTwoIcon boxSize="50px" color="orange.300" />} />
);

export default EmptyResult;
