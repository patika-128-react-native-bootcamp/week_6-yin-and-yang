import React, {useContext} from 'react';
import {View, Text, FlatList, Button} from 'react-native';
import CharacterCard from '../../components/cards/CharacterCard';
import {FavouriteContext} from '../../context/FavouriteContext/FavouriteProvider';

export default function FavouriteCharacters() {
  const {state, dispatch} = useContext(FavouriteContext);

  function handleRemoveFavourites(character) {
    dispatch({type: 'REMOVE_FROM_FAVOURITE_CHARACTERS', payload: {character}});
    character.notFavourite = true;
  }

  const renderFavouriteCharacters = ({item}) => {
    return (
      <View>
        <CharacterCard
          character={item}
          onClick={() => navigateToDetail(item)}
          onButtonClick={handleRemoveFavourites}
        />
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={state.favouriteCharacters}
        renderItem={renderFavouriteCharacters}
        horizontal={true}
      />
    </View>
  );
}
