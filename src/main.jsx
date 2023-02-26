import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './chakra/theme';
import '@fontsource/fira-code';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </>
);
