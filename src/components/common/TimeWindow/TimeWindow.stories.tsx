import { ComponentMeta, ComponentStory } from '@storybook/react';
import addHours from 'date-fns/addHours';

import TimeWindow from './TimeWindow';

export default {
  component: TimeWindow,
  args: {
    start: new Date().toISOString(),
    end: addHours(new Date(), 1).toISOString(),
  },
} as ComponentMeta<typeof TimeWindow>;

const Template: ComponentStory<typeof TimeWindow> = (args) => <TimeWindow {...args} />;

export const Default = Template.bind({});
