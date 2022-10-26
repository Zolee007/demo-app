import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerProps,
  Heading,
} from '@chakra-ui/react';
import StopList from '../../../../components/stops/StopList/StopList';
import { Stop } from '../../../../types/Stop';

type StopDrawerProps = Omit<DrawerProps, 'children'> & {
  selectedStopId?: Stop['stop_id'];
  nextStopId?: Stop['stop_id'];
  stops?: Array<Stop>;
  onStopSelected: (stopId: Stop['stop_id']) => void;
};

const StopsDrawer = ({ selectedStopId, nextStopId, stops, onStopSelected, ...drawerProps }: StopDrawerProps) => (
  <Drawer {...drawerProps}>
    <DrawerOverlay />
    <DrawerContent>
      <DrawerCloseButton />
      <DrawerHeader>
        <Heading as="h3">My stops</Heading>
      </DrawerHeader>
      <DrawerBody>
        <StopList selectedStopId={selectedStopId} nextStopId={nextStopId} stops={stops} onSelectStop={onStopSelected} />
      </DrawerBody>
    </DrawerContent>
  </Drawer>
);

export default StopsDrawer;
