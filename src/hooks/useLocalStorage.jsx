import React from 'react';

function useLocalStorage(itemName, initialValue) {
  const [dataLS, setDataLS] = React.useState([]);

  React.useEffect(() => {
    try {
      const fetchedData = localStorage.getItem(itemName);
      let parsedData;

      if (!fetchedData) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedData = initialValue;
      } else {
        parsedData = JSON.parse(fetchedData);
      }
      setDataLS(parsedData)

    } catch {
      console.log("there's been an error");
    }
  }, [])

  function saveLSData (newData) {
    try {
      setDataLS(newData);
      const stringData = JSON.stringify(newData);
      localStorage.setItem(itemName, stringData)
    } catch {
      console.log("another error")
    }
  }

  return {
    dataLS,
    saveLSData
  }
}

export { useLocalStorage }