import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Fragment } from 'react';
import { GlobalStyles } from '~/shared/styles/globals';
import { RecoilRoot } from 'recoil';
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
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </Fragment>
  );
}

export default MyApp;
