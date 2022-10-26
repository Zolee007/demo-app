import { useQuery, UseQueryOptions } from 'react-query';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { RouteResponse } from '../../../types/RouteResponse';
import { RouteQueryKeys } from '../types/RouteQueryKeys';
import { ApiEndpoints } from '../../../services/api/ApiEndpoints';

const useRouteQuery = (
  options?: UseQueryOptions<AxiosResponse<RouteResponse>, AxiosError<RouteResponse>, RouteResponse>,
) =>
  useQuery<AxiosResponse<RouteResponse>, AxiosError<RouteResponse>, RouteResponse>(
    RouteQueryKeys.list(),
    async () => await axios.get<RouteResponse>(ApiEndpoints.route()),
    {
      ...options,
      select: (response) => response.data,
      enabled: true,
    },
  );

export default useRouteQuery;
