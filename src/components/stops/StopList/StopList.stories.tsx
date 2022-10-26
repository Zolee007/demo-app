import { ComponentMeta, ComponentStory } from '@storybook/react';

import StopList from './StopList';
import StopFactory from '../../../mocks/factories/StopFactory';

export default {
  component: StopList,
  args: {
    stops: StopFactory.buildList(3),
  },
} as ComponentMeta<typeof StopList>;

const Template: ComponentStory<typeof StopList> = (args) => <StopList {...args} />;

export const Failed = Template.bind({});
Failed.args = {
  stops: undefined,
};

export const Empty = Template.bind({});
Empty.args = {
  stops: [],
};

export const Default = Template.bind({});
