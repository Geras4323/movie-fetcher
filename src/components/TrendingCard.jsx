import React from 'react';

import { useRouter } from 'next/router';

function TrendingCard({ movie }) {
  const router = useRouter();

  return (
    <>
      <div
        className="w-44 flex flex-col items-center gap-y-2 bg-cyan-300 rounded-xl   hover:cursor-pointer"
        onClick={() => router.push(`/movie/${movie.id}`)}
      >
        <img className="w-full h-64 rounded-xl" src={'https://image.tmdb.org/t/p/w300' + movie.poster_path} alt={movie.name || movie.title}/>
        <span className="text-center text-lg font-semibold px-2">{movie.name || movie.title}</span>
      </div>
    </>
  );
}

export { TrendingCard };