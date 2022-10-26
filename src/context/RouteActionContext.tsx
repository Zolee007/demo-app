import { createContext, Dispatch, PropsWithChildren, useContext } from 'react';
import { RouteAction } from '../store/RouteReducer';

const RouteActionContext = createContext<Dispatch<RouteAction>>(() => {});

export const RouteActionContextProvider = ({
  children,
  value,
}: PropsWithChildren<{ value: Dispatch<RouteAction> }>) => (
  <RouteActionContext.Provider value={value}>{children}</RouteActionContext.Provider>
);

export const useRouteActionContext = () => {
  const context = useContext(RouteActionContext);

  if (!context) {
    throw new Error('RouteActionContext must be used within RouteActionContextProvider');
  }

  return context;
};
