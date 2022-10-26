import { Status } from './Status';
import { Depot } from './Depot';
import { Garage } from './Garage';
import { Stop } from './Stop';

export type RouteResponse = {
  stops: Array<Stop>;
  name: string;
  orglog_id: string;
  vehicle_id: string;
  driver_id: string;
  time_start: string;
  time_end: string;
  status: Status;
  depots: Array<Depot>;
  garage: Garage;
  _created: string;
  _modified: string;
  _active: boolean;
};
