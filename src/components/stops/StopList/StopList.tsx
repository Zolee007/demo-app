import { List } from '@chakra-ui/react';

import StopListItem from './components/StopListItem/StopListItem';
import EmptyResult from '../../common/results/EmptyResult/EmptyResult';
import ErrorResult from '../../common/results/ErrorResult/ErrorResult';
import { Stop } from '../../../types/Stop';

type StopListPageProps = {
  stops?: Array<Stop>;
  onSelectStop: (stopId: Stop['stop_id']) => void;
  selectedStopId?: Stop['stop_id'];
  nextStopId?: Stop['stop_id'];
};

const StopList = ({ selectedStopId, nextStopId, stops, onSelectStop }: StopListPageProps) => {
  if (!stops) {
    return <ErrorResult title="Data error" detail="Invalid data was provided" />;
  }

  if (!stops.length) {
    return <EmptyResult title="No stops" detail="This route has no assigned stops" />;
  }

  return (
    <List spacing="3">
      {stops.map((stop) => (
        <StopListItem
          key={stop.stop_id}
          stop={stop}
          isNext={stop.stop_id === nextStopId}
          isSelected={stop.stop_id === selectedStopId}
          onSelectStop={onSelectStop}
        />
      ))}
    </List>
  );
};

export default StopList;
