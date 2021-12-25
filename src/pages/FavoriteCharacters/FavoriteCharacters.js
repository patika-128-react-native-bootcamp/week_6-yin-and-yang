import React, {useContext} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import CharacterCard from '../../components/cards/CharacterCard';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {FavouriteContext} from '../../context/FavouriteContext/FavouriteProvider';
import styles from './FavoriteCharacters.style';

export default function FavouriteCharacters({navigation}) {
  const {state, dispatch} = useContext(FavouriteContext);

  function handleRemoveFavourites(character) {
    dispatch({type: 'REMOVE_FROM_FAVOURITE_CHARACTERS', payload: {character}});
    character.notFavourite = true;
  }

  function navigateToDetail(characterInfo) {
    navigation.navigate(routes.CHARACTER_DETAIL, {character: characterInfo});
  }

  const renderFavouriteCharacters = ({item}) => {
    return (
      <View>
        <CharacterCard
          character={item}
          onClick={() => navigateToDetail(item)}
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => handleRemoveFavourites(item)}>
          <Icon name="delete" size={30} color={'red'} />
          <Text style={styles.buttonText}> Remove From Favourites</Text>
        </TouchableOpacity>
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
