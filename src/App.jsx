import { ChakraProvider } from '@chakra-ui/react';
import React from 'react'
import { theme } from './styles/theme';
import AppRoutes from './routes/app_routes';

export default function App() {
  return <ChakraProvider theme={theme}>
    <AppRoutes/>
  </ChakraProvider>;
}
