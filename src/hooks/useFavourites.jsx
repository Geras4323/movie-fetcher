import React from 'react';

import { useLocalStorage } from '@hooks/useLocalStorage';
import { FavouritesContext } from '@contexts/FavouritesContext';

function useFavourites() {
  const {
    saveLSData
  } = useLocalStorage('FAVS', [])

  const {
    localFavourites,
    setLocalFavourites
  } = React.useContext(FavouritesContext);



  const localFavouritesIDs = React.useMemo(() => { // do it once, redo it only when dataLS changes
    const ids = localFavourites.map((movie => movie.id))
    return ids;
  }, [localFavourites])

  function addToFavourites(movie) {
    const movies = [...localFavourites];
    movies.push(movie);
    setLocalFavourites(movies)
    saveLSData(movies);
    // console.log('added');
  }

  function removeFromFavourites(movie) {
    const oldMovies = [...localFavourites];
    const filtered = oldMovies.filter(oldMovie => oldMovie.id !== movie.id);
    setLocalFavourites(filtered);
    saveLSData(filtered);
    // console.log('removed');
  }

  return {
    localFavouritesIDs,
    addToFavourites,
    removeFromFavourites
  }
}

export { useFavourites }