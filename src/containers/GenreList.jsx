import React from 'react';

import { getData } from '@functions/getData';
import { LanguageContext } from '@contexts/LanguageContext';
import Link from 'next/link';

function GenreList() {
  const [genres, setGenres] = React.useState([]);
  const { currentLanguage } = React.useContext(LanguageContext);

  React.useEffect(() => {
    async function getGenreList() {
      getData({path: 'genre/movie/list', lang: currentLanguage})
        .then(data => data.genres)
        .then(genres => setGenres(genres))
    }
    getGenreList();
  }, [currentLanguage])


  return (
    <div className="mb-8">
      <p className="mb-4 text-2xl text-white font-semibold">Search by Genre</p>
      <div className="w-full h-auto g_grid-genres">
        {genres.map((genre) => (
          <Link href={`/genres/${genre.name}`} key={genre.id}>
            <a className="h-8 text-center text-xl text-gray-300 rounded-lg border border-border">{genre.name}</a>
          </Link>
        ))}
      </div>
    </div>
  );
}

export { GenreList };