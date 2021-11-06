import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/global-styles';
import { AppProps } from 'next/app';

import { theme } from '../styles/theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

App.propTypes = AppProps;
