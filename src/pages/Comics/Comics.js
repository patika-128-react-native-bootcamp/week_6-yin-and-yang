import React, { useEffect, useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import ComicsCard from '../../components/cards/ComicsCard';
import Loading from '../../components/Loading';
import SearchBar from '../../components/SearchBar';
import useComics from '../../hooks/useComics';
import routes from '../../navigation/routes';

export default function Comics({navigation}) {
    const {comicsData, comicsLoading, comicsError} = useComics();
    const [comicsList, setComicsList] = useState([]);
  
    useEffect(() => {
      setComicsList(comicsData);
    }, [comicsData]);
  
    if (comicsError) {
      Alert.alert(error.message);
    }
  
    function navigateToDetail(comicsInfo) {
      navigation.navigate(routes.COMICS_DETAIL, {comics: comicsInfo});
    }
  
    function handleSearch(text) { //TODO
      const filteredList = comicsData.filter(comics => {
        const searchedText = text.toLowerCase();
        const currentTitle = comics.title.toLowerCase();
        return currentTitle.indexOf(searchedText) > -1;
      });
      setComicsList(filteredList);
    }
  
    const renderComics = ({item}) => (
      <ComicsCard comics={item} onClick={() => navigateToDetail(item)} />
    );

    return (
      <View>
        <SearchBar onSearch={handleSearch}></SearchBar>
        {comicsLoading && <Loading />}
        <FlatList
          data={comicsList}
          renderItem={renderComics}
          horizontal={true}></FlatList>
      </View>
    );
}
