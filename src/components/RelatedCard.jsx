import React from 'react';

import { useRouter } from 'next/router';

function RelatedCard({ related }) {
  const router = useRouter();

  return (
    <>
      <div
        className="w-32 flex flex-col items-center gap-y-2 bg-cyan-300 rounded-xl   hover:cursor-pointer"
        onClick={() => router.push(`/movie/${related.id}`)}
      >
        <img className="w-full h-46 rounded-xl" src={'https://image.tmdb.org/t/p/w300' + related.poster_path} alt={related.name || related.title}/>
        <span className="text-center text-lg font-semibold px-2">{related.name || related.title}</span>
      </div>
    </>
  );
}

export { RelatedCard };