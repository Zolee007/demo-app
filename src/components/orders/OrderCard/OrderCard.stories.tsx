import { ComponentMeta, ComponentStory } from '@storybook/react';

import OrderCard from './OrderCard';
import OrderFactory from '../../../mocks/factories/OrderFactory';

export default {
  component: OrderCard,
  args: {
    stopId: 1,
    order: OrderFactory.build(),
  },
} as ComponentMeta<typeof OrderCard>;

const Template: ComponentStory<typeof OrderCard> = (args) => <OrderCard {...args}>This is a card</OrderCard>;

export const Default = Template.bind({});
