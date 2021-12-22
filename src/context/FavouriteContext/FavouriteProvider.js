import React, {createContext, useReducer} from 'react';
import reducer from './reducer';
import store from './store';

export const FavouriteContext = createContext();

export default function FavouriteProvider({children}) {
  const [state, dispatch] = useReducer(reducer, store);

  return (
    <FavouriteContext.Provider value={{state, dispatch}}>
      {children}
    </FavouriteContext.Provider>
  );
}