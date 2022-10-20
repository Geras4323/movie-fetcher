import React from 'react';

function Movie({ movie }) {
  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-36 h-auto flex flex-col gap-y-2">
        <img className="w-full h-52 rounded-xl" src={'https://image.tmdb.org/t/p/w300' + movie.poster_path} alt="" />
        <p>{movie.name || movie.title}</p>
      </div>
    </div>
  )
}

export { Movie }