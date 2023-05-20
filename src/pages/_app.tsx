import NextNprogress from "nextjs-progressbar";
import { ThemeProvider } from "styled-components";
import { AppProps } from "next/app";
import GlobalStyles from "../styles/global";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
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
