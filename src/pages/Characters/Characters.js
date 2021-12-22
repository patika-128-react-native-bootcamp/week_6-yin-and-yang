import React, {useEffect, useState, useContext} from 'react';
import {View, Text, FlatList} from 'react-native';
import CharacterCard from '../../components/cards/CharacterCard';
import Loading from '../../components/Loading';
import SearchBar from '../../components/SearchBar';
import { FavouriteContext } from '../../context/FavouriteContext/FavouriteProvider';
import useCharacters from '../../hooks/useCharacters/useCharacters';
import routes from '../../navigation/routes';

export default function Characters({navigation}) {
  const {characterData, characterLoading, characterError} = useCharacters();
  const [characterList, setCharacterList] = useState([]);

  const {dispatch} = useContext(FavouriteContext)

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
  }

  const renderCharacters = ({item}) => (
    <CharacterCard character={item} onClick={() => navigateToDetail(item)} onButtonClick={() => handleAddFavourites(item)}/>
  );
console.log(characterList)
  return (
    <View>
      <SearchBar onSearch={handleSearch}></SearchBar>
      {characterLoading && <Loading />}
      <FlatList
        data={characterList}
        renderItem={renderCharacters}
        horizontal={true}></FlatList>
    </View>
  );
}
