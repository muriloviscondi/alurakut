import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles, theme } from 'styles/globals';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Alurakut</title>

        {/* <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" /> */}

        <meta
          name="description"
          content="Um projeto da Imersão React da Alura, utilizando React, NextJS e Typescript"
        />
      </Head>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;
