import React, { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import '../styles/globals.scss';

import { Layout } from '../components';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default MyApp;
