import React from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

function RelatedCard({ related }) {
  const router = useRouter();

  return (
    <>
      <div
        className="w-32 flex flex-col items-center gap-y-2 bg-black bg-opacity-30 rounded-xl   hover:cursor-pointer"
        onClick={() => router.push(`/movie/${related.id}`)}
      >
        <Image className="rounded-xl" width={128} height={192} src={'https://image.tmdb.org/t/p/w300' + related.poster_path} alt={related.name || related.title}/>
        <span className="text-center text-lg text-white font-semibold px-2">{related.name || related.title}</span>
      </div>
    </>
  );
}

export { RelatedCard };