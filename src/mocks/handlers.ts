import { rest } from 'msw';

import MockData from './data/route.json';
import { RouteResponse } from '../types/RouteResponse';
import { ApiEndpoints } from '../services/api/ApiEndpoints';
import RouteFactory from './factories/RouteFactory';
import StopFactory from './factories/StopFactory';
import { Status } from '../types/Status';

export const handlers = [
  rest.get(ApiEndpoints.route(), (_, res, ctx) =>
    res(ctx.delay(), ctx.status(200), ctx.json<RouteResponse>(MockData as unknown as RouteResponse)),
  ),
];

export const emptyHandlers = [
  rest.get(ApiEndpoints.route(), (_, res, ctx) =>
    res(ctx.delay(), ctx.status(200), ctx.json(RouteFactory.build({ stops: [] }))),
  ),
];

export const failedHandlers = [rest.get(ApiEndpoints.route(), (_, res, ctx) => res(ctx.delay(), ctx.status(500)))];

export const completedHandlers = [
  rest.get(ApiEndpoints.route(), (_, res, ctx) =>
    res(
      ctx.delay(),
      ctx.status(200),
      ctx.json(RouteFactory.build({ stops: [StopFactory.build({ status: Status.Completed })] })),
    ),
  ),
];
