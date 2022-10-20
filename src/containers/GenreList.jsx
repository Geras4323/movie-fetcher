import React from 'react';

import { getData } from '@functions/getData';
import Link from 'next/link';

function GenreList() {
  const [genres, setGenres] = React.useState([]);

  React.useEffect(() => {
    async function getGenreList() {
      getData({path: 'genre/movie/list'})
        .then(data => data.genres)
        .then(genres => setGenres(genres))
    }
    getGenreList();
  }, [])


  return (
    <>
      <div className="w-full h-auto bg-red-500 g_grid-container">
        {genres.map((genre) => (
          <Link href={`/genres/${genre.name}`} key={genre.id}>
            <a>{genre.name}</a>
          </Link>
        ))}
      </div>
    </>
  );
}

export { GenreList };