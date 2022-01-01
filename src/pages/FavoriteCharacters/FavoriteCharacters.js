import React, {useContext} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import CharacterCard from '../../components/cards/CharacterCard';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {FavouriteContext} from '../../context/FavouriteContext/FavouriteProvider';
import styles from './FavoriteCharacters.style';
import routes from '../../navigation/routes';
import {ThemeContext} from '../../context/ThemeContext/ThemeProvider';
import {useTranslation} from 'react-i18next';

export default function FavouriteCharacters({navigation}) {
  const {state, dispatch} = useContext(FavouriteContext);

  const {themeState} = useContext(ThemeContext);

  const {t} = useTranslation();

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
          style={styles[themeState.darkMode].buttonContainer}
          onPress={() => handleRemoveFavourites(item)}>
          <Icon name="delete" size={30} color={'red'} />
          <Text style={styles[themeState.darkMode].buttonText}>
            {' '}
            {t('Remove From Favourites')}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles[themeState.darkMode].container}>
      <View style={styles[themeState.darkMode].textView}>
        <Icon name="star" size={40} color={'#FFD700'} />
        <Text style={styles[themeState.darkMode].text}>
          {t('Favourite Characters').toUpperCase()}
        </Text>
        <Icon name="star" size={40} color={'#FFD700'} />
      </View>
      <FlatList
        data={state.favouriteCharacters}
        renderItem={renderFavouriteCharacters}
        horizontal={true}
        style={styles[themeState.darkMode].list}
      />
    </View>
  );
}
