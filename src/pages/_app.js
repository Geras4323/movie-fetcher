import '../styles/globals.css';

import React from 'react';
import Head from 'next/head';
import { FavouritesContext } from '@contexts/FavouritesContext';
import { useFavouritesContext } from '@hooks/useFavouritesContext';

function MyApp({ Component, pageProps }) {
  const value = useFavouritesContext()

  return (
  <>
    <FavouritesContext.Provider value={value}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </FavouritesContext.Provider>
  </>
  )
}

export default MyApp;
