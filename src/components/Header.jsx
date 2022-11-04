import React from 'react';

import { Search } from '@components/Search';
import { LanguageChanger } from '@components/LanguageChanger';

function Header() {
  return (
    <div className="w-full h-auto flex flex-row gap-x-4 justify-between">
      <Search />
      <LanguageChanger />
    </div>
  )
}

export { Header };