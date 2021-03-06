import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import { grey, blueGrey } from '@mui/material/colors';
import { ThemeProvider } from '@mui/material';
import AppProvider from 'assets/useApp';
import BoardView from 'pages/BoardView';

const App = () => {
  const theme = createTheme({
    typography: { fontFamily: 'Lato' },
    palette: {
      secondary: { light: grey[50], main: grey[100], dark: blueGrey[50] },
      info: { light: grey[600], main: grey[700], dark: grey[800] },
    },
  });

  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path='/*' element={<BoardView />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </AppProvider>
  )
};

export default App;
