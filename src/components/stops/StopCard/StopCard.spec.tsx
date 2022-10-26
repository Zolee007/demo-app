import { composeStories } from '@storybook/testing-react';
import { userEvent } from '@storybook/testing-library';
import { render, screen } from '@testing-library/react';

import * as stories from './StopCard.stories';

const { Default } = composeStories(stories);

describe('StopCard', () => {
  describe('when clicking the Itinerary button', () => {
    it('calls the proper callback', async () => {
      const itineraryCallback = jest.fn();
      const processCallback = jest.fn();
      render(<Default onOpenItinerary={itineraryCallback} onOpenOrders={processCallback} />);

      const button = screen.getByRole('button', { name: 'Open itinerary' });
      await userEvent.click(button);

      expect(itineraryCallback).toHaveBeenCalled();
      expect(processCallback).not.toHaveBeenCalled();
    });
  });

  describe('when clicking the Proceed button', () => {
    it('calls the proper callback', async () => {
      const itineraryCallback = jest.fn();
      const processCallback = jest.fn();
      render(<Default onOpenItinerary={itineraryCallback} onOpenOrders={processCallback} />);

      const button = screen.getByRole('button', { name: 'Process order' });
      await userEvent.click(button);

      expect(processCallback).toHaveBeenCalled();
      expect(itineraryCallback).not.toHaveBeenCalled();
    });
  });
});
