import React from 'react';

import { useRouter } from 'next/router';

function Movie({ movie }) {
  const router = useRouter();

  return (
    <div
      className="w-full h-full flex justify-center bg-red-500 rounded-xl   hover:cursor-pointer"
      onClick={() => router.push(`/movie/${movie.id}`)}
    >
      <div className="w-36 h-auto flex flex-col gap-y-2">
        <img className="w-full h-52 rounded-xl" src={'https://image.tmdb.org/t/p/w300' + movie.poster_path} alt="" />
        <p>{movie.name || movie.title}</p>
      </div>
    </div>
  )
}

export { Movie }