import React from 'react';
import Select from 'react-select';

import { LanguageContext } from '@contexts/LanguageContext';

const options = [
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Español' },
  { value: 'fr', label: 'Français' },
]

function LanguageChanger() {
  const {
    en,
    es,
    fr,
    setTextLang,
    currentLanguage,
    setCurrentLanguage
  } = React.useContext(LanguageContext);
  const [label, setLabel] = React.useState()

  function handleChange(option) {
    setCurrentLanguage(option.value)
    if (option.value === 'en') {
      setTextLang(en)
      // console.log('english');
    } else if (option.value === 'es') {
      setTextLang(es)
      // console.log('español');
    } else if (option.value === 'fr') {
      setTextLang(fr)
      // console.log('fracais');
    }
  }

  React.useEffect(() => {
    const index = currentLanguage ? options.findIndex(option => option.value === currentLanguage) : 0;
    setLabel(options[index].label);
  })

  return (
    <div className="my-4 w-24 min-w-fit">
      <Select
        instanceId="value-select"
        className="w-full h-full p-2"
        onChange={handleChange}
        options={options}
        placeholder={label}
      />
    </div>
  )
}

export { LanguageChanger };