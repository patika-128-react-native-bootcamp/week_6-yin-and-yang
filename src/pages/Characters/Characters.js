import React, {useEffect, useState, useContext} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Switch,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CharacterCard from '../../components/cards/CharacterCard';
import Loading from '../../components/Loading';
import SearchBar from '../../components/SearchBar';
import {FavouriteContext} from '../../context/FavouriteContext/FavouriteProvider';
import {ThemeContext} from '../../context/ThemeContext/ThemeProvider';
import useCharacters from '../../hooks/useCharacters/useCharacters';
import routes from '../../navigation/routes';
import styles from './Characters.style';

export default function Characters({navigation}) {
  const {characterData, characterLoading, characterError} = useCharacters();
  const [characterList, setCharacterList] = useState([]);

  const {dispatch} = useContext(FavouriteContext);

  const {themeState, themeDispatch} = useContext(ThemeContext);

  useEffect(() => {
    setCharacterList(characterData);
  }, [characterData]);

  if (characterError) {
    Alert.alert(error.message);
  }

  function navigateToDetail(characterInfo) {
    navigation.navigate(routes.CHARACTER_DETAIL, {character: characterInfo});
  }

  function handleSearch(text) {
    const filteredList = characterData.filter(character => {
      const searchedText = text.toLowerCase();
      const currentName = character.name.toLowerCase();
      return currentName.indexOf(searchedText) > -1;
    });
    setCharacterList(filteredList);
  }

  function handleAddFavourites(character) {
    dispatch({
      type: 'ADD_TO_FAVOURITE_CHARACTERS',
      payload: {
        character,
      },
    });
    character.notFavourite = false;
  }

  function handleDarkTheme() {
    if (themeState.darkMode) themeDispatch({type: 'LIGHT_MODE'});
    else themeDispatch({type: 'DARK_MODE'});
  }

  const renderCharacters = ({item}) => (
    <View>
      <CharacterCard character={item} onClick={() => navigateToDetail(item)} />
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => handleAddFavourites(item)}>
        <Icon name="star" size={30} color={'#FFD700'} />
        <Text style={styles.buttonText}> Add To Favourites</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={themeState.darkMode ? '#f5dd4b' : '#f4f3f4'}
        onValueChange={handleDarkTheme}
        value={themeState.darkMode}
      />
      <SearchBar onSearch={handleSearch}></SearchBar>
      {characterLoading && <Loading />}
      <FlatList
        data={characterList}
        renderItem={renderCharacters}
        horizontal={true}
        keyExtractor={item => item.id}
        />
    </SafeAreaView>
  );
}
