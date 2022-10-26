import { ComponentMeta, ComponentStory } from '@storybook/react';

import EmptyResult from './EmptyResult';

export default {
  component: EmptyResult,
  args: {
    title: 'This is empty',
    detail: 'Your results come back empty :(',
  },
} as ComponentMeta<typeof EmptyResult>;

const Template: ComponentStory<typeof EmptyResult> = (args) => <EmptyResult {...args} />;

export const Default = Template.bind({});
