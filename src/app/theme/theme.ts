'use client';
import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#7919C8',
    },
    secondary: {
      main: '#040316',
    },
    background: {
      default: '#0E021D',
    },

    text: {
      primary: '#F5F5F5', // Charcoal
      secondary: '#DDEDF0', // Dark Slate Gray
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});
