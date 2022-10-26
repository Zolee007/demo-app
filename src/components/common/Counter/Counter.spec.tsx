import { composeStories } from '@storybook/testing-react';
import { userEvent } from '@storybook/testing-library';
import { render, screen } from '@testing-library/react';

import * as stories from './Counter.stories';

const { Default } = composeStories(stories);

describe('Counter', () => {
  it('displays the input count', () => {
    const count = 4;
    render(<Default count={count} />);

    expect(screen.getByText(count)).toBeVisible();
  });

  describe('when incrementing', () => {
    it('increases the count by 1', async () => {
      const onChanged = jest.fn();
      render(<Default onCountChanged={onChanged} />);

      const pluButton = screen.getByRole('button', { name: 'Plus' });
      await userEvent.click(pluButton);

      const newCount = Default.args!.count! + 1;
      await screen.findByText(newCount);
      expect(onChanged).toHaveBeenCalledWith(newCount);
    });
  });

  describe('when decrementing', () => {
    it('decreases the count by 1', async () => {
      const onChanged = jest.fn();
      render(<Default onCountChanged={onChanged} />);

      const minusButton = screen.getByRole('button', { name: 'Minus' });
      await userEvent.click(minusButton);

      const newCount = Default.args!.count! - 1;
      await screen.findByText(newCount);
      expect(onChanged).toHaveBeenCalledWith(newCount);
    });

    it('doesnt decreases below zero', async () => {
      const count = 0;
      render(<Default count={count} />);

      const minusButton = screen.getByRole('button', { name: 'Minus' });
      await userEvent.click(minusButton);

      await screen.findByText(count);
    });
  });
});
