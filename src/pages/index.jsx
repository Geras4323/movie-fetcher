import React from 'react';

import Head from 'next/head'

import { Search } from '@components/Search';
import { TrendingList } from '@containers/TrendingList';
import { GenreList } from '@containers/GenreList';


export default function Home() {

  return (
    <>
      <Head>
        <title>MOVIES</title>
      </Head>

      <Search />
      <TrendingList />
      <GenreList />
    </>
  )
}