import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// Supports weights 100-900
import '@fontsource-variable/inter';
import { ColorModeScript } from '@chakra-ui/react';
import { theme } from './styles/theme.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
    <App />
  </StrictMode>,
)
