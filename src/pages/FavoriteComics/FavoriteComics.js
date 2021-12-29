import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ComicsCard from '../../components/cards/ComicsCard';
import {FavouriteContext} from '../../context/FavouriteContext/FavouriteProvider';
import styles from './FavoriteComics.style';
import routes from '../../navigation/routes';
import {ThemeContext} from '../../context/ThemeContext/ThemeProvider';
import {useTranslation} from 'react-i18next';

export default function FavoriteComics({navigation}) {
  const {state, dispatch} = useContext(FavouriteContext);

  const {themeState} = useContext(ThemeContext);

  const {t} = useTranslation();

  function handleRemoveFavourites(comics) {
    dispatch({type: 'REMOVE_FROM_FAVOURITE_COMICS', payload: {comics}});
  }

  function navigateToDetail(comicsInfo) {
    navigation.navigate(routes.COMICS_DETAIL, {comics: comicsInfo});
  }

  const renderFavouriteComics = ({item}) => {
    return (
      <View>
        <ComicsCard comics={item} onClick={() => navigateToDetail(item)} />
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
        <Icon name="star" size={50} color={'#FFD700'} />
        <Text style={styles[themeState.darkMode].text}>
          {t('Favourite Comics').toUpperCase()}
        </Text>
        <Icon name="star" size={50} color={'#FFD700'} />
      </View>
      <FlatList
        data={state.favouriteComics}
        renderItem={renderFavouriteComics}
        horizontal={true}
        style={styles[themeState.darkMode].list}
      />
    </View>
  );
}
