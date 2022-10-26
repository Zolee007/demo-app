import { Factory } from 'fishery';

import OrderFactory from './OrderFactory';
import { Status } from '../../types/Status';
import { Stop } from '../../types/Stop';

class StopFactory extends Factory<Stop> {
  constructor() {
    super(({ sequence }) => ({
      stop_id: sequence,
      status: Status.Pending,
      name: `Stop ${sequence}`,
      comment: undefined,
      avatar: undefined,
      telephone: undefined,
      address: {
        house_number: '24/A',
        street: 'Koningstraat',
        town: 'Amsterdam',
        postal_code: '1073 CF',
        country: 'NL',
        lat: 52.37,
        lon: 48.13,
      },
      eta: '2022-10-24T09:00:00.000Z',
      time_start: '2022-10-24T09:00:00.000Z',
      time_end: '2022-10-24T09:30:00.000Z',
      orders: OrderFactory.buildList(3),
    }));
  }
}

export default StopFactory.define(() => ({}));
