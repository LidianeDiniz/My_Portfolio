import NextNprogress from 'nextjs-progressbar';
import GlobalStyles from '../styles/global';
import theme from '../styles/theme';
import { ThemeProvider } from 'styled-components';



function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <NextNprogress
        color={theme.primary}
        startPosition={0.3}
        stopDelayMs={200}
        showOnShallow
      />
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
