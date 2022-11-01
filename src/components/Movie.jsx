import React from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

function Movie({ movie }) {
  const router = useRouter();

  return (
    <div
      className="w-36 h-full flex flex-col justify-start bg-black bg-opacity-30 rounded-xl   hover:cursor-pointer"
      onClick={() => router.push(`/movie/${movie.id}`)}
    >
      {movie.poster_path
        ? <Image className="rounded-xl" width={144} height={208} src={'https://image.tmdb.org/t/p/w300' + movie.poster_path} alt={movie.name || movie.title} />
        : <Image className="rounded-xl bg-black bg-opacity-30" width={144} height={208} src={'/noimage.png'} alt="No image found" />
      }
      <p className="py-2 px-4 text-white font-semibold">{movie.name || movie.title}</p>
    </div>
  )
}

export { Movie }