import React from 'react';

import RoutePage from './RoutePage/RoutePage';
import ErrorResult from '../components/common/results/ErrorResult/ErrorResult';

export const Routes = [
  {
    path: '/',
    element: <RoutePage />,
    errorElement: <ErrorResult action={{ title: 'Home', onAction: () => window.location.replace('/') }} />,
  },
];
