import React from 'react';
import Link from 'next/link';

import { Movie } from '@components/Movie';
import { FavouritesContext } from '@contexts/FavouritesContext';
import { LanguageContext } from '@contexts/LanguageContext';

export default function Favourites() {
  const { localFavourites } = React.useContext(FavouritesContext);
  const { textLang } = React.useContext(LanguageContext);

  return (
    <div className="p-4">
      <section>
        <div className="w-full h-8 flex flex-row gap-4 mb-4">
          <Link href="/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className='w-10 h-full fill-current text-white   hover:cursor-pointer'>
              <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
            </svg>
          </Link>
          <p className="text-2xl text-white font-semibold mb-4">{textLang.favouritesPage_title}</p>
        </div>
        {localFavourites.length >= 1
          ? <div className="g_grid-container">
              {localFavourites.map((movie) => (
                <Movie
                  key={movie.id}
                  movie={movie}
                />
              ))}
            </div>
          : <div>
              <p className="mt-12 px-4 text-center text-gray-200 text-lg   sm:text-xl">{textLang.favouritesPage_noFavs}</p>
            </div>
        }
      </section>
    </div>
  )
}