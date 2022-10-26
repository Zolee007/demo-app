import { ComponentMeta, ComponentStory } from '@storybook/react';
import StopFactory from '../../../mocks/factories/StopFactory';

import NextStop from './NextStop';

export default {
  component: NextStop,
  args: {
    nextStop: StopFactory.build(),
    remainingCount: 1,
    itemsCount: 3,
  },
} as ComponentMeta<typeof NextStop>;

const Template: ComponentStory<typeof NextStop> = (args) => <NextStop {...args} />;

export const Default = Template.bind({});
