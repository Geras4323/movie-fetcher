import React from 'react';

import { getData } from '@functions/getData';
import { RelatedCard } from '@components/RelatedCard';

function RelatedList({ id }) {
  const [relateds, setRelated] = React.useState([]);

  React.useEffect(() => {
    async function getRelatedList() {
      await getData({path: `/movie/${id}/similar`})
        .then(data => data.results)
        .then(relatedList => setRelated(relatedList))
    }
    getRelatedList();
  })

  return (
    <div className="w-full h-auto bg-slate-500 overflow-x-auto">
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