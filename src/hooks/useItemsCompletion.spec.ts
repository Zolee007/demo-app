import { renderHook } from '@testing-library/react';

import useItemsCompletion from './useItemsCompletion';
import OrderFactory from '../mocks/factories/OrderFactory';
import { Status } from '../types/Status';
import { Order } from '../types/Order';

describe('useItemCompletion', () => {
  describe('when empty', () => {
    it('returns the correct params', () => {
      const { result } = renderHook(() => useItemsCompletion<Order>([]));

      expect(result.current.remainingCount).toBe(0);
      expect(result.current.completedCount).toBe(0);
      expect(result.current.itemsCount).toBe(0);
      expect(result.current.progress).toBe(0);
      expect(result.current.isEmpty).toBe(true);
      expect(result.current.isCompleted).toBe(true);
      expect(result.current.nextItem).toBeUndefined();
    });
  });

  describe('when not empty', () => {
    it('returns the correct params', () => {
      const items = [
        OrderFactory.build({ status: Status.Completed }),
        OrderFactory.build({ status: Status.InProgress }),
        OrderFactory.build({ status: Status.Scheduled }),
        OrderFactory.build({ status: Status.Scheduled }),
      ];
      const { result } = renderHook(() => useItemsCompletion<Order>(items));

      expect(result.current.remainingCount).toBe(3);
      expect(result.current.completedCount).toBe(1);
      expect(result.current.itemsCount).toBe(4);
      expect(result.current.progress).toBe(25);
      expect(result.current.isEmpty).toBe(false);
      expect(result.current.isCompleted).toBe(false);
      expect(result.current.nextItem).toEqual(items[1]);
    });
  });
});
