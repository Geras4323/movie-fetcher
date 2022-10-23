import React from 'react';

import Head from 'next/head'

import { Search } from '@components/Search';
import { MovieScroll } from '@containers/MovieScroll';
import { GenreList } from '@containers/GenreList';


export default function Home() {

  return (
    <>
      <Head>
        <title>MOVIES</title>
      </Head>

      <div className="p-4">
        <Search />
        <GenreList />
        <MovieScroll
          path={'trending/all/day'}
          sectionTitle={'Trending'}
          seeMore
        />
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