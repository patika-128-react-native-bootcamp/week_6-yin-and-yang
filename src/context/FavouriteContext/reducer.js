export default (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVOURITE_CHARACTERS': {
      const selectedCharacter = action.payload.character;

      const characterFavouriteIndex = state.favouritesCharacters.findIndex(
        f => f.id === selectedCharacter.id,
      );
      const isInFavourites = characterFavouriteIndex !== -1;

      if (isInFavourites) {
        return state;
      }

      const updatedFavourites = [
        ...state.favouritesCharacters,
        selectedCharacter,
      ];

      return {...state, favouritesCharacters: updatedFavourites};
    }

    case 'REMOVE_FROM_FAVOURITE_CHARACTERS': {
        console.log(state.favouritesCharacters)
      const selectedCharacter = action.payload.character;

      const characterFavouriteIndex = state.favouritesCharacters.findIndex(
        f => f.id === selectedCharacter.id,
      );

      const updatedFavouritesList = [...state.favouritesCharacters];
      updatedFavouritesList.splice(characterFavouriteIndex, 1);

      return {...state, favouritesCharacters: updatedFavouritesList};
    }

    default:
      return state;
  }
};
