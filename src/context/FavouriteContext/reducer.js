import AsyncStorage from '@react-native-async-storage/async-storage';

export default (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVOURITE_CHARACTERS': {
      const selectedCharacter = action.payload.character;

      const characterFavouriteIndex = state.favouriteCharacters.findIndex(
        f => f.id === selectedCharacter.id,
      );
      const isInFavourites = characterFavouriteIndex !== -1;

      if (isInFavourites) {
        return state;
      }

      const updatedFavourites = [
        ...state.favouriteCharacters,
        selectedCharacter,
      ];

      AsyncStorage.setItem(
        '@FavouriteCharactersList',
        JSON.stringify(updatedFavourites),
      );

      return {...state, favouriteCharacters: updatedFavourites};
    }

    case 'REMOVE_FROM_FAVOURITE_CHARACTERS': {
      const selectedCharacter = action.payload.character;

      const characterFavouriteIndex = state.favouriteCharacters.findIndex(
        f => f.id === selectedCharacter.id,
      );

      const updatedFavouritesList = [...state.favouriteCharacters];
      updatedFavouritesList.splice(characterFavouriteIndex, 1);

      AsyncStorage.setItem(
        '@FavouriteCharactersList',
        JSON.stringify(updatedFavouritesList),
      );

      return {...state, favouriteCharacters: updatedFavouritesList};
    }

    case 'ADD_TO_FAVOURITE_COMICS': {
      const selectedComics = action.payload.comics;

      const comicsFavouriteIndex = state.favouriteComics.findIndex(
        f => f.id === selectedComics.id,
      );
      const isInFavourites = comicsFavouriteIndex !== -1;

      if (isInFavourites) {
        return state;
      }

      const updatedFavourites = [...state.favouriteComics, selectedComics];

      AsyncStorage.setItem(
        '@FavouriteComicsList',
        JSON.stringify(updatedFavourites),
      );

      return {...state, favouriteComics: updatedFavourites};
    }

    case 'REMOVE_FROM_FAVOURITE_COMICS': {
      const selectedComics = action.payload.comics;

      const comicsFavouriteIndex = state.favouriteComics.findIndex(
        f => f.id === selectedComics.id,
      );

      const updatedFavouritesList = [...state.favouriteComics];
      updatedFavouritesList.splice(comicsFavouriteIndex, 1);

      AsyncStorage.setItem(
        '@FavouriteComicsList',
        JSON.stringify(updatedFavouritesList),
      );

      return {...state, favouriteComics: updatedFavouritesList};
    }

    case 'SET_INITIAL_FAVOURITE_CHARACTER': {
      const favCharacter = action.payload;

      return {...state, favouriteCharacters: favCharacter};
    }

    case 'SET_INITIAL_FAVOURITE_COMICS': {
      const favComics = action.payload;

      return {...state, favouriteComics: favComics};
    }

    default:
      return state;
  }
};
