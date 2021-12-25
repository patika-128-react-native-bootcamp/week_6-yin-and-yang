import React, {createContext, useReducer} from 'react';
import reducer from './reducer';
import store from './store';

export const ThemeContext = createContext();

export default function ThemeProvider({children}) {
  const [themeState, themeDispatch] = useReducer(reducer, store);

  return (
    <ThemeContext.Provider value={{themeState, themeDispatch}}>
      {children}
    </ThemeContext.Provider>
  );
}
