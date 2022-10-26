import { Stop } from '../../types/Stop';
import { Order } from '../../types/Order';
import { Status } from '../../types/Status';

export const updateStopOrderQuantity = (
  stops: Array<Stop>,
  stopId: Stop['stop_id'],
  orderId: Order['order_id'],
  quantity: number,
) =>
  stops.map((s) =>
    s.stop_id === stopId
      ? {
          ...s,
          orders: s.orders.map((o) => (o.order_id === orderId ? { ...o, quantity } : o)),
        }
      : s,
  );

export const updateStopOrderStatus = (
  stops: Array<Stop>,
  stopId: Stop['stop_id'],
  orderId: Order['order_id'],
  status: Status,
) =>
  stops.map((s) =>
    s.stop_id === stopId
      ? {
          ...s,
          orders: s.orders.map((o) => (o.order_id === orderId ? { ...o, status } : o)),
        }
      : s,
  );

export const updateStopStatus = (stops: Array<Stop>, stopId: Stop['stop_id'], status: Status) =>
  stops.map((s) => (s.stop_id === stopId ? { ...s, status } : s));
