import { ComponentMeta, ComponentStory } from '@storybook/react';

import OrderList from './OrderList';
import OrderFactory from '../../../mocks/factories/OrderFactory';

export default {
  component: OrderList,
  args: {
    stopId: 1,
    orders: OrderFactory.buildList(3),
  },
} as ComponentMeta<typeof OrderList>;

const Template: ComponentStory<typeof OrderList> = (args) => <OrderList {...args} />;

export const Failed = Template.bind({});
Failed.args = {
  orders: undefined,
};

export const Empty = Template.bind({});
Empty.args = {
  orders: [],
};

export const Default = Template.bind({});
