import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Fragment } from 'react';
import { GlobalStyles } from '~/shared/styles/globals';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title> Kanban // Task management</title>
        <link rel="apple-touch-icon" href="assets/icons/logo-mobile.svg" />
        <link rel="shortcut icon" href="assets/icons/logo-mobile.svg" />
        <meta name="description" content="Kanban task management web app" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
