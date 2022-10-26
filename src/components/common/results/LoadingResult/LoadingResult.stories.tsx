import { ComponentMeta, ComponentStory } from '@storybook/react';

import LoadingResult from './LoadingResult';

export default {
  component: LoadingResult,
  args: {
    title: 'Loading',
    detail: 'Please wait',
  },
} as ComponentMeta<typeof LoadingResult>;

const Template: ComponentStory<typeof LoadingResult> = (args) => <LoadingResult {...args} />;

export const Default = Template.bind({});
