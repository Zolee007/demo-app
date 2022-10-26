import { Reducer } from 'react';

import { updateStopOrderQuantity, updateStopOrderStatus, updateStopStatus } from './utils/routeReducerUtils';
import { RouteResponse } from '../types/RouteResponse';
import { Status } from '../types/Status';
import { Stop } from '../types/Stop';
import { Order } from '../types/Order';

export const DefaultRouteState: RouteResponse = {
  _active: false,
  _created: '',
  _modified: '',
  name: '',
  orglog_id: '',
  vehicle_id: '',
  driver_id: '',
  time_start: '',
  time_end: '',
  status: Status.New,
  garage: {
    orgloc_id: '',
    name: 'Garage',
    status: Status.New,
    stop_id: 0,
    time_start: '',
    time_end: '',
    orders: [],
    address: {
      lat: 0.0,
      lon: 0.0,
      country: '',
      postal_code: '',
      town: '',
      street: '',
      house_number: '',
    },
    dropoff: false,
    eta: '',
  },
  depots: [],
  stops: [],
};

export type RouteAction =
  | { type: 'set-state'; route: RouteResponse }
  | { type: 'update-route-status'; status: Status }
  | { type: 'update-stop-status'; stopId: Stop['stop_id']; status: Status }
  | { type: 'update-stop-order-quantity'; stopId: Stop['stop_id']; orderId: Order['order_id']; quantity: number }
  | { type: 'update-stop-order-status'; stopId: Stop['stop_id']; orderId: Order['order_id']; status: Status };

export type RouteReducer = Reducer<RouteResponse, RouteAction>;

const routeReducer: RouteReducer = (state, action) => {
  switch (action.type) {
    case 'set-state':
      return action.route;
    case 'update-route-status':
      return { ...state, status: action.status };
    case 'update-stop-status':
      return {
        ...state,
        stops: updateStopStatus(state.stops, action.stopId, action.status),
      };
    case 'update-stop-order-quantity':
      return {
        ...state,
        stops: updateStopOrderQuantity(state.stops, action.stopId, action.orderId, action.quantity),
      };
    case 'update-stop-order-status':
      return {
        ...state,
        stops: updateStopOrderStatus(state.stops, action.stopId, action.orderId, action.status),
      };
    default:
      return state;
  }
};

export default routeReducer;
