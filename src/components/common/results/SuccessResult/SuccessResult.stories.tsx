import { ComponentMeta, ComponentStory } from '@storybook/react';

import SuccessResult from './SuccessResult';

export default {
  component: SuccessResult,
  args: {
    title: 'Nice job!',
    detail: 'Every order is processed',
  },
} as ComponentMeta<typeof SuccessResult>;

const Template: ComponentStory<typeof SuccessResult> = (args) => <SuccessResult {...args} />;

export const Default = Template.bind({});
