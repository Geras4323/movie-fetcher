import React from 'react';

import { Movie } from '@components/Movie';
import { getData } from '@functions/getData';
import Link from 'next/link';

import { FavouritesContext } from '@contexts/FavouritesContext';
import { LanguageContext } from '@contexts/LanguageContext';


function MovieScroll({ path, sectionTitle, seeMore, morePath }) {
  const [movies, setMovies] = React.useState([]);
  const { currentLanguage } = React.useContext(LanguageContext);
  const { localFavourites } = React.useContext(FavouritesContext);
  const target = path ? movies : localFavourites;


  React.useEffect(() => {
    async function getTrendingPreview() {
      getData({path: path, lang: currentLanguage})
        .then(data => data.results)
        .then(movieList => setMovies(movieList))
    }
    if (path) {
      getTrendingPreview();
    }
  }, [currentLanguage])


  return (
    <div className="mt-10 border-t border-gray-500 rounded-xl">
      <section className="w-full h-8 my-4 px-4 flex flex-row justify-between items-end">
        <p className="text-2xl text-white font-semibold">{sectionTitle}</p>
        {seeMore &&
          <Link href={morePath}>
            <button className="w-24 h-full text-white border border-border rounded-lg">See more</button>
          </Link>
        }
      </section>

      <div className="w-full h-auto overflow-x-scroll">
        <div className="h-full flex">
          <div className="flex flex-row gap-x-4">
            {target.map((movie) => (
              <Movie
                key={movie.id}
                movie={movie}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export { MovieScroll };

// movie.poster_path &&  //only if the movie´s image is available