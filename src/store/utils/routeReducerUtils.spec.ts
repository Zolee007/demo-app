import StopFactory from '../../mocks/factories/StopFactory';
import { updateStopOrderQuantity, updateStopStatus } from './routeReducerUtils';
import { Status } from '../../types/Status';

describe('routeReducerUtils', () => {
  describe('updateStopOrderQuantity', () => {
    it('updates the correct order quantity', () => {
      const stops = StopFactory.buildList(2);

      const updatedStop = stops[0];
      const updatedOrder = updatedStop.orders[1];

      const result = updateStopOrderQuantity(stops, updatedStop.stop_id, updatedOrder.order_id, 42);

      expect(result[0].orders[1].quantity).toEqual(42);
    });
  });

  describe('updateStopOrderStatus', () => {
    it('updates the correct order status', () => {
      const stops = StopFactory.buildList(2);

      const updatedStop = stops[0];
      const updatedOrder = updatedStop.orders[1];

      const result = updateStopOrderQuantity(stops, updatedStop.stop_id, updatedOrder.order_id, Status.New);

      expect(result[0].orders[1].quantity).toEqual(Status.New);
    });
  });

  describe('updateStopStatus', () => {
    it('updates the correct stop status', () => {
      const stops = StopFactory.buildList(2);

      const updatedStop = stops[1];

      const result = updateStopStatus(stops, updatedStop.stop_id, Status.New);

      expect(result[1].status).toEqual(Status.New);
    });
  });
});
