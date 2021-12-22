import React, {useContext} from 'react';
import {View, Text, FlatList, Button} from 'react-native';
import CharacterCard from '../../components/cards/CharacterCard';
import {FavouriteContext} from '../../context/FavouriteContext/FavouriteProvider';

export default function FavouriteCharacters() {
  const {state, dispatch} = useContext(FavouriteContext);

  function handleRemoveFavourites(character) {
    dispatch({type: 'REMOVE_FROM_FAVOURITE_CHARACTERS', payload: {character}});
  }

  const renderFavouriteCharacters = ({item}) => {
    return (
      <View>
        <CharacterCard
          character={item}
          onClick={() => navigateToDetail(item)}
        />
        <Button title="Remove" onPress={() => handleRemoveFavourites(item)}></Button>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={state.favouritesCharacters}
        renderItem={renderFavouriteCharacters}
      />
    </View>
  );
}
