import React from 'react';

import { TrendingCard } from '@components/TrendingCard';
import { getData } from '@functions/getData';
import Link from 'next/link';

function TrendingList() {
  const [trending, setTrending] = React.useState([]);


  React.useEffect(() => {
    async function getTrendingPreview() {
      getData({path: 'trending/all/day'})
        .then(data => data.results)
        .then(movies => setTrending(movies))
    }
    getTrendingPreview();
  }, [])


  return (
    <>
      <section className="w-full h-8 mb-4 px-4 flex flex-row justify-between items-center">
        <p className="text-2xl font-semibold">Trending</p>
        <Link href="/trending">
          <button className="w-24 h-full border border-border rounded-lg">See more</button>
        </Link>
      </section>

      <div className="w-full h-auto mb-4 bg-slate-500 overflow-x-scroll">
        <div className="h-full flex">
          <div className="flex flex-row gap-x-4">
            {trending.map((movie) => (

              <TrendingCard
                key={movie.id}
                movie={movie}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export { TrendingList };

// movie.poster_path &&  //only if the movie´s image is available