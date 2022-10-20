import '../styles/globals.css';

import { SearchContetxt } from '../contexts/SearchContetxt';
import { useSearch } from 'hooks/useSearch';
import React from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const search = useSearch();

  return (
  <>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <SearchContetxt.Provider value={search}>
      <Component {...pageProps} />
    </SearchContetxt.Provider>
  </>
  )
}

export default MyApp;
