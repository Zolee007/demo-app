import { ComponentMeta, ComponentStory } from '@storybook/react';

import StopCard from './StopCard';
import StopFactory from '../../../mocks/factories/StopFactory';

export default {
  component: StopCard,
  args: {
    stop: StopFactory.build(),
  },
} as ComponentMeta<typeof StopCard>;

const Template: ComponentStory<typeof StopCard> = (args) => <StopCard {...args} />;

export const Default = Template.bind({});

export const WithPhoneNumber = Template.bind({});
WithPhoneNumber.args = {
  stop: StopFactory.build({ telephone: '0123456789' }),
};

export const WithComment = Template.bind({});
WithComment.args = {
  stop: StopFactory.build({ comment: 'This is a comment' }),
};

export const WithPhoneNumberAndComment = Template.bind({});
WithPhoneNumberAndComment.args = {
  stop: StopFactory.build({ telephone: '0123456789', comment: 'This is a comment' }),
};
