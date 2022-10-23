import React from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

function Movie({ movie }) {
  const router = useRouter();

  return (
    <div
      className="w-full h-full flex justify-center bg-black bg-opacity-30 rounded-xl   hover:cursor-pointer"
      onClick={() => router.push(`/movie/${movie.id}`)}
    >
      <div className="w-auto h-auto flex flex-col">
        <Image className="rounded-xl" width={144} height={208} src={'https://image.tmdb.org/t/p/w300' + movie.poster_path} alt="" />
        <p className="py-2 px-4 text-white font-semibold">{movie.name || movie.title}</p>
      </div>
    </div>
  )
}

export { Movie }