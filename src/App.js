import React from 'react';
import FavouriteProvider from './context/FavouriteContext/FavouriteProvider';
import ThemeProvider from './context/ThemeContext/ThemeProvider';
import Navigation from './navigation/navigation';

export default function App() {
  return (
    <ThemeProvider>
      <FavouriteProvider>
        <Navigation />
      </FavouriteProvider>
    </ThemeProvider>
  );
}
