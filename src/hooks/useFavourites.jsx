import React from 'react';

import { useLocalStorage } from '@hooks/useLocalStorage';

function useFavourites() {
  const {
    dataLS,
    saveLSData
  } = useLocalStorage('FAVS', [])

  const dataLSIDs = React.useMemo(() => { // do it once, redo it only when dataLS changes
    const ids = dataLS.map((movie => movie.id))
    return ids;
  }, [dataLS])

  function addToFavourites(movie) {
    const movies = [...dataLS];
    movies.push(movie);
    saveLSData(movies);
    console.log('added');
  }

  function removeFromFavourites(movie) {
    const oldMovies = [...dataLS]
    const filtered = oldMovies.filter(oldMovie => oldMovie.id !== movie.id)
    saveLSData(filtered);
    console.log('removed');
  }

  return {
    dataLS,
    dataLSIDs,
    addToFavourites,
    removeFromFavourites
  }
}

export { useFavourites }