import React from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

function ScrollCard({ movie }) {
  const router = useRouter();

  return (
    <>
      <div
        className="w-44 flex flex-col items-center gap-y-2 bg-black bg-opacity-30 rounded-xl   hover:cursor-pointer"
        onClick={() => router.push(`/movie/${movie.id}`)}
      >
        <Image className="rounded-xl" width={176} height={256} src={'https://image.tmdb.org/t/p/w300' + movie.poster_path} alt={movie.name || movie.title}/>
        <span className="text-center text-lg text-white font-semibold px-2">{movie.name || movie.title}</span>
      </div>
    </>
  );
}

export { ScrollCard };