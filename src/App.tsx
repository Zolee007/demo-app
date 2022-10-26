import React from 'react';
import { QueryClientProvider } from 'react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClientInstance } from './services/QueryClientInstance';
import { Routes } from './pages/Routes';

const App = () => (
  <QueryClientProvider client={QueryClientInstance}>
    <ChakraProvider>
      <RouterProvider router={createBrowserRouter(Routes)} />
    </ChakraProvider>
  </QueryClientProvider>
);

export default App;
