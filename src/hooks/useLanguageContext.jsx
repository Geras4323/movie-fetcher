import React from 'react';

import { en } from '@languages/en';
import { es } from '@languages/es';
import { fr } from '@languages/fr';

function useLanguageContext() {
  const [currentLanguage, setCurrentLanguage] = React.useState('en');
  const [textLang, setTextLang] = React.useState(en);


  return {
    en,
    es,
    fr,
    textLang,
    setTextLang,
    currentLanguage,
    setCurrentLanguage
  }
}

export { useLanguageContext };