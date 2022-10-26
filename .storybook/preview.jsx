import { QueryClientProvider } from 'react-query';
import { initialize, mswDecorator } from 'msw-storybook-addon';
import { QueryClientInstance } from '../src/services/QueryClientInstance';

initialize();

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'light',
  },
};

QueryClientInstance.setDefaultOptions({
  ...QueryClientInstance.getDefaultOptions(),
  queries: {
    retry: false,
  },
});

export const decorators = [
  (storyFn) => {
    QueryClientInstance.clear();

    return (
      <QueryClientProvider client={QueryClientInstance}>
        <div className="story-container">{storyFn()}</div>
      </QueryClientProvider>
    );
  },
  mswDecorator,
];
