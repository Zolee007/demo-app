import { ComponentMeta, ComponentStory } from '@storybook/react';

import ErrorResult from './ErrorResult';

export default {
  component: ErrorResult,
  args: {
    title: 'Oops!',
    detail: 'Unexpected error :(',
  },
} as ComponentMeta<typeof ErrorResult>;

const Template: ComponentStory<typeof ErrorResult> = (args) => <ErrorResult {...args} />;

export const Default = Template.bind({});
