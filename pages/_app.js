import { ThemeProvider, ThemeContext } from '../contexts/ThemeContext';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useContext } from 'react';

const AppContent = ({ Component, pageProps }) => {
  const { darkMode } = useContext(ThemeContext);
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </MuiThemeProvider>
  );
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <AppContent Component={Component} pageProps={pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;