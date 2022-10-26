import { ComponentMeta, ComponentStory } from '@storybook/react';

import Card from './Card';

export default {
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  <Card p="4" width="fit-content" {...args}>
    This is a test card
  </Card>
);

export const Default = Template.bind({});
