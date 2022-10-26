export const RouteQueryKeys = {
  all: () => ['all'],
  lists: () => [...RouteQueryKeys.all(), 'list'],
  list: () => [...RouteQueryKeys.lists(), 'my-current-route'],
};
