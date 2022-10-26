import { ComponentMeta, ComponentStory } from '@storybook/react';

import OrderTagGrid from './OrderTagGrid';
import OrderFactory from '../../../mocks/factories/OrderFactory';

export default {
  component: OrderTagGrid,
  args: {
    orders: OrderFactory.buildList(3),
  },
} as ComponentMeta<typeof OrderTagGrid>;

const Template: ComponentStory<typeof OrderTagGrid> = (args) => <OrderTagGrid {...args} />;

export const Default = Template.bind({});
