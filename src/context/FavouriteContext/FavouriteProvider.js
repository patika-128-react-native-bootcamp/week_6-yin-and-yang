import React, {createContext, useEffect, useReducer, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import reducer from './reducer';
import store from './store';

export const FavouriteContext = createContext();

export default function FavouriteProvider({children}) {
  const [state, dispatch] = useReducer(reducer, store);

  useEffect(() => {
    AsyncStorage.getItem('@FavouriteCharactersList').then(
      FavouriteCharactersList => {
        FavouriteCharactersList &&
          dispatch({
            type: 'SET_INITIAL_FAVOURITE_CHARACTER',
            payload: JSON.parse(FavouriteCharactersList),
          });
      },
    );
    AsyncStorage.getItem('@FavouriteComicsList').then(FavouriteComicsList => {
      FavouriteComicsList &&
        dispatch({
          type: 'SET_INITIAL_FAVOURITE_COMICS',
          payload: JSON.parse(FavouriteComicsList),
        });
    });
  }, []);

  return (
    <FavouriteContext.Provider value={{state, dispatch}}>
      {children}
    </FavouriteContext.Provider>
  );
}
