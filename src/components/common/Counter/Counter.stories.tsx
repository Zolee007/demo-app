import { ComponentMeta, ComponentStory } from '@storybook/react';

import Counter from './Counter';
import Card from '../Card/Card';

export default {
  component: Counter,
  args: {
    count: 1,
  },
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = (args) => (
  <Card p="4" width="fit-content">
    <Counter {...args} />
  </Card>
);

export const Default = Template.bind({});
