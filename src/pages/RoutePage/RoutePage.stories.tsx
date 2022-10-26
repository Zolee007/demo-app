import RoutePage from './RoutePage';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { completedHandlers, emptyHandlers, failedHandlers, handlers } from '../../mocks/handlers';

export default {
  component: RoutePage,
} as ComponentMeta<typeof RoutePage>;

const Template: ComponentStory<typeof RoutePage> = () => <RoutePage />;

export const Failed = Template.bind({});
Failed.parameters = {
  msw: failedHandlers,
};

export const Empty = Template.bind({});
Empty.parameters = {
  msw: emptyHandlers,
};

export const Default = Template.bind({});
Default.parameters = {
  msw: handlers,
};

export const Completed = Template.bind({});
Completed.parameters = {
  msw: completedHandlers,
};
