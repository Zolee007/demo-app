import { Factory } from 'fishery';

import StopFactory from './StopFactory';
import { Status } from '../../types/Status';
import { RouteResponse } from '../../types/RouteResponse';
import { Garage } from '../../types/Garage';

class RouteFactory extends Factory<RouteResponse> {
  constructor() {
    super(({ sequence }) => ({
      stops: StopFactory.buildList(3),
      name: `ABC ${sequence}`,
      orglog_id: '',
      vehicle_id: '1',
      driver_id: '2',
      eta: '2022-10-24T09:00:00.000Z',
      time_start: '2022-10-24T09:00:00.000Z',
      time_end: '2022-10-24T09:30:00.000Z',
      status: Status.Pending,
      depots: [],
      garage: {} as Garage,
      _active: true,
      _created: '2022-10-24T09:00:00.000Z',
      _modified: '2022-10-24T09:00:00.000Z',
    }));
  }
}

export default RouteFactory.define(() => ({}));
