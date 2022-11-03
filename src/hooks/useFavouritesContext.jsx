import React from 'react';
import { useLocalStorage } from '@hooks/useLocalStorage';

function useFavouritesContext() {
  const [localFavourites, setLocalFavourites] = React.useState([])
  const {
    dataLS,
  } = useLocalStorage('FAVS', []);

  React.useEffect(() => {
    setLocalFavourites(dataLS); // ya tenemos la informacion del LS en el array del contexto
  }, [dataLS])  // si dataLS no está, no va a cargar en el primer render

  return {
    localFavourites,
    setLocalFavourites
  }
}

export { useFavouritesContext };