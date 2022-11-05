import React from 'react';

import Head from 'next/head'

import { Header } from '@components/Header';
import { MovieScroll } from '@containers/MovieScroll';
import { GenreList } from '@containers/GenreList';

import { FavouritesContext } from '@contexts/FavouritesContext';
import { LanguageContext } from '@contexts/LanguageContext';


export default function Home() {
  const { textLang } = React.useContext(LanguageContext);
  const { localFavourites } = React.useContext(FavouritesContext);
  const favsAvailable = localFavourites.length >= 1;

  return (
    <>
      <Head>
        <title>MOVIES</title>
      </Head>

      <div className="p-4">
        <Header />
        <GenreList />
        <MovieScroll
          path={'trending/all/day'}
          sectionTitle={textLang.movieScroll_trendingTitle}
          seeMore={textLang.movieScroll_seeMore}
          morePath={'/trending'}
        />
        {favsAvailable &&
          <MovieScroll
            sectionTitle={textLang.movieScroll_favouritesTitle}
            seeMore={textLang.movieScroll_seeMore}
            morePath={'/favourites'}
          />
        }
        <MovieScroll
          path={'/movie/popular'}
          sectionTitle={textLang.movieScroll_popularMoviesTitle}
        />
        <MovieScroll
          path={'/tv/popular'}
          sectionTitle={textLang.movieScroll_popularShowsTitle}
        />
      </div>
    </>
  )
}