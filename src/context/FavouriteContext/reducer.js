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

      AsyncStorage.setItem('@FavouriteCharactersList', JSON.stringify(updatedFavourites))

      console.log(AsyncStorage.getItem('@FavouriteCharactersList').then(FavouriteCharactersList => {
        JSON.parse(FavouriteCharactersList)
      }))

      return {...state, favouriteCharacters: updatedFavourites};
    }

    case 'REMOVE_FROM_FAVOURITE_CHARACTERS': {

      const selectedCharacter = action.payload.character;

      const characterFavouriteIndex = state.favouriteCharacters.findIndex(
        f => f.id === selectedCharacter.id,
      );

      const updatedFavouritesList = [...state.favouriteCharacters];
      updatedFavouritesList.splice(characterFavouriteIndex, 1);

      return {...state, favouriteCharacters: updatedFavouritesList};
    }

    default:
      return state;
  }
};
