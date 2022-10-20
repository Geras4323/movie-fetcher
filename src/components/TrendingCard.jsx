import React from 'react';

function TrendingCard({ movie }) {
  return (
    <>
      <div className="w-44 flex flex-col items-center gap-y-2">
        <img className="w-full h-64 rounded-xl" src={'https://image.tmdb.org/t/p/w300' + movie.poster_path} alt={movie.name || movie.title}/>
        <span className="text-center text-lg font-semibold px-2">{movie.name || movie.title}</span>
      </div>
    </>
  );
}

export { TrendingCard };