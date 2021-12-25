import React, {createContext, useEffect, useReducer} from 'react';
import { useColorScheme } from 'react-native';
import reducer from './reducer';
import store from './store';

export const ThemeContext = createContext();

export default function ThemeProvider({children}) {
  const [themeState, themeDispatch] = useReducer(reducer, store);
  const colorScheme = useColorScheme();

  useEffect(() => {
    themeState.darkMode = colorScheme
  }, [colorScheme])

  return (
    <ThemeContext.Provider value={{themeState, themeDispatch}}>
      {children}
    </ThemeContext.Provider>
  );
}
