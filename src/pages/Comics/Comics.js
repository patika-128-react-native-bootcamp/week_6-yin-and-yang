import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Alert,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import ComicsCard from '../../components/cards/ComicsCard';
import Loading from '../../components/Loading';
import SearchBar from '../../components/SearchBar';
import {ThemeContext} from '../../context/ThemeContext/ThemeProvider';
import useComics from '../../hooks/useComics';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import routes from '../../navigation/routes';
import styles from './Comics.style';
import {FavouriteContext} from '../../context/FavouriteContext/FavouriteProvider';
import TopBar from '../../components/TopBar';
import {useTranslation} from 'react-i18next';

export default function Comics({navigation}) {
  const {comicsData, comicsLoading, comicsError} = useComics();
  const [comicsList, setComicsList] = useState([]);

  const {dispatch} = useContext(FavouriteContext);

  const {themeState, themeDispatch} = useContext(ThemeContext);

  const {t} = useTranslation();

  useEffect(() => {
    setComicsList(comicsData);
  }, [comicsData]);

  if (comicsError) {
    Alert.alert(error.message);
  }

  function navigateToDetail(comicsInfo) {
    navigation.navigate(routes.COMICS_DETAIL, {comics: comicsInfo});
  }

  function navigateToHomePage() {
    navigation.navigate(routes.HOME_PAGE);
  }

  function handleSearch(text) {
    const filteredList = comicsData.filter(comics => {
      const searchedText = text.toLowerCase();
      const currentTitle = comics.title.toLowerCase();
      return currentTitle.indexOf(searchedText) > -1;
    });
    setComicsList(filteredList);
  }

  function handleAddFavourites(comics) {
    dispatch({
      type: 'ADD_TO_FAVOURITE_COMICS',
      payload: {
        comics,
      },
    });
  }

  const renderComics = ({item}) => (
    <View>
      <ComicsCard comics={item} onClick={() => navigateToDetail(item)} />
      <TouchableOpacity
        style={styles[themeState.darkMode].buttonContainer}
        onPress={() => handleAddFavourites(item)}>
        <Icon name="star" size={30} color={'#FFD700'} />
        <Text style={styles[themeState.darkMode].buttonText}>
          {''} {t('Add To Favourites')}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles[themeState.darkMode].container}>
      <TopBar onHomePress={navigateToHomePage} />
      <SearchBar onSearch={handleSearch}></SearchBar>
      {comicsLoading && <Loading />}
      <FlatList
        data={comicsList}
        renderItem={renderComics}
        horizontal={true}></FlatList>
    </SafeAreaView>
  );
}
