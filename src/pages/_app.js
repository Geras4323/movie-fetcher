import '../styles/globals.css';

import React from 'react';
import Head from 'next/head';
import { FavouritesContext } from '@contexts/FavouritesContext';
import { useFavouritesContext } from '@hooks/useFavouritesContext';
import { LanguageContext } from '@contexts/LanguageContext';
import { useLanguageContext } from '@hooks/useLanguageContext';

function MyApp({ Component, pageProps }) {
  const favs = useFavouritesContext()
  const langs = useLanguageContext()

  return (
  <>
    <LanguageContext.Provider value={langs}>
      <FavouritesContext.Provider value={favs}>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <Component {...pageProps} />
      </FavouritesContext.Provider>
    </LanguageContext.Provider>
  </>
  )
}

export default MyApp;
