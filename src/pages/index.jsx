import React from 'react';

import Head from 'next/head'

import { Search } from '@components/Search';
import { Header } from '@components/Header';
import { MovieScroll } from '@containers/MovieScroll';
import { GenreList } from '@containers/GenreList';

import { FavouritesContext } from '@contexts/FavouritesContext';


export default function Home() {
  const { localFavourites } = React.useContext(FavouritesContext);
  const favsAvailable = localFavourites.length >= 1;

  return (
    <>
      <Head>
        <title>MOVIES</title>
      </Head>

      <div className="p-4">
        <Header />
        {/* <Search /> */}
        <GenreList />
        <MovieScroll
          path={'trending/all/day'}
          sectionTitle={'Trending'}
          seeMore
          morePath={'/trending'}
        />
        {favsAvailable &&
          <MovieScroll
            sectionTitle={'Your Favourites'}
            seeMore
            morePath={'/favourites'}
          />
        }
        <MovieScroll
          path={'/movie/popular'}
          sectionTitle={'Popular Movies'}
        />
        <MovieScroll
          path={'/tv/popular'}
          sectionTitle={'Popular TV Shows'}
        />
      </div>
    </>
  )
}