import React from 'react';

import { getData } from '@functions/getData';
import { RelatedCard } from '@components/RelatedCard';
import { useRouter } from 'next/router';

function RelatedList({ id }) {
  const [relateds, setRelated] = React.useState([]);
  const router = useRouter();

  React.useEffect(() => {
    async function getRelatedList() {
      await getData({path: `/movie/${id}/similar`})
        .then(data => data.results)
        .then(relatedList => setRelated(relatedList))
    }
    getRelatedList();
  }, [router.query])

  return (
    <div className="w-full h-auto overflow-x-scroll">
      <div className="h-full flex">
        <div className="flex flex-row gap-x-4">
          {relateds.map((related) => (
            <RelatedCard
              key={related.id}
              related={related}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export { RelatedList };