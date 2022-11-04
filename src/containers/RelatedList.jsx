import React from 'react';

import { getData } from '@functions/getData';
import { RelatedCard } from '@components/RelatedCard';

import { LanguageContext } from '@contexts/LanguageContext';


function RelatedList({ id }) {
  const [relateds, setRelated] = React.useState([]);
  const { currentLanguage } = React.useContext(LanguageContext);

  React.useEffect(() => {
    async function getRelatedList() {
      await getData({path: `/movie/${id}/similar`, lang: currentLanguage})
        .then(data => data.results)
        .then(relatedList => setRelated(relatedList))
    }
    getRelatedList();
  }, [id, currentLanguage])

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