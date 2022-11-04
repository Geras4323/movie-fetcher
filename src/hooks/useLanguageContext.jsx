import React from 'react';

function useLanguageContext() {
  const [currentLanguage, setCurrentLanguage] = React.useState('en');

  React.useEffect(() => {
    // console.log(currentLanguage);
  }, [currentLanguage])

  return {
    currentLanguage,
    setCurrentLanguage
  }
}

export { useLanguageContext };