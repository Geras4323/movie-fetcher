import React from 'react';

function useSearch() {
  const [searchValue, setSearchValue] = React.useState();

  return {
    searchValue,
    setSearchValue
  }
}

export { useSearch };