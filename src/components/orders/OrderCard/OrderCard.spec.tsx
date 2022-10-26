import { composeStories } from '@storybook/testing-react';
import { userEvent } from '@storybook/testing-library';
import { render, screen } from '@testing-library/react';

import * as stories from './OrderCard.stories';
import { Status } from '../../../types/Status';

const { Default } = composeStories(stories);

describe('OrderCard', () => {
  describe('when decrementing the quantity', () => {
    it('dispatches the quantity decreased event', async () => {
      const actionCallback = jest.fn();
      render(<Default onAction={actionCallback} />);

      const button = screen.getByRole('button', { name: 'Minus' });
      await userEvent.click(button);

      expect(actionCallback).toHaveBeenCalledWith({
        type: 'update-stop-order-quantity',
        stopId: Default.args!.stopId,
        orderId: Default.args!.order!.order_id,
        quantity: Default.args!.order!.quantity - 1,
      });
    });
  });

  describe('when incrementing the quantity', () => {
    it('dispatches the quantity decreased event', async () => {
      const actionCallback = jest.fn();
      render(<Default onAction={actionCallback} />);

      const button = screen.getByRole('button', { name: 'Plus' });
      await userEvent.click(button);

      expect(actionCallback).toHaveBeenCalledWith({
        type: 'update-stop-order-quantity',
        stopId: Default.args!.stopId,
        orderId: Default.args!.order!.order_id,
        quantity: Default.args!.order!.quantity + 1,
      });
    });
  });

  describe('when reporting an issue', () => {
    it('dispatches the quantity decreased event', async () => {
      const actionCallback = jest.fn();
      render(<Default onAction={actionCallback} />);

      const button = screen.getByRole('button', { name: 'Report issue' });
      await userEvent.click(button);

      expect(actionCallback).toHaveBeenCalledWith({
        type: 'update-stop-order-status',
        stopId: Default.args!.stopId,
        orderId: Default.args!.order!.order_id,
        status: Status.Completed,
      });
    });
  });

  describe('when completing the order', () => {
    it('dispatches the quantity decreased event', async () => {
      const actionCallback = jest.fn();
      render(<Default onAction={actionCallback} />);

      const button = screen.getByRole('button', { name: 'Complete order' });
      await userEvent.click(button);

      expect(actionCallback).toHaveBeenCalledWith({
        type: 'update-stop-order-status',
        stopId: Default.args!.stopId,
        orderId: Default.args!.order!.order_id,
        status: Status.Completed,
      });
    });
  });
});
