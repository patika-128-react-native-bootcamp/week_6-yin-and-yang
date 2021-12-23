import React, {createContext, useReducer, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import reducer from './reducer';
import store from './store';

export const FavouriteContext = createContext();

export default function FavouriteProvider({children}) {
  const [favouriteCharacters, setFavouriteCharacters] = useState([]);
  const [favouriteComics, setFavouriteComics] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('@FavouriteCharactersList').then(FavouriteCharactersList => {
      FavouriteCharactersList && setFavouriteCharacters(JSON.parse(FavouriteCharactersList))
    })
    AsyncStorage.getItem('@FavouriteComicsList').then(FavouriteComicsList => {
      FavouriteComicsList && setFavouriteComics(JSON.parse(FavouriteComicsList))
    })
  }, [])

  const [state, dispatch] = useReducer(reducer, {favouriteCharacters, favouriteComics});

  return (
    <FavouriteContext.Provider value={{state, dispatch}}>
      {children}
    </FavouriteContext.Provider>
  );
}