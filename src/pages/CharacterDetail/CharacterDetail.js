import {useRoute} from '@react-navigation/native';
import React, {useContext, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ThemeContext} from '../../context/ThemeContext/ThemeProvider';
import styles from './CharacterDetail.style';

export default function CharacterDetail() {
  const route = useRoute();

  const {character} = route.params;

  const [comicsVisible, setComicsVisible] = useState(false);

  const {themeState, themeDispatch} = useContext(ThemeContext);

  const {t} = useTranslation();

  function handleComicsVisible() {
    setComicsVisible(!comicsVisible);
  }

  const renderComics = item => (
    <View style={styles[themeState.darkMode].comicsListView}>
      <Text style={styles[themeState.darkMode].comics}>• {item.name}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles[themeState.darkMode].container}>
      <ScrollView>
        <Image
          source={{
            uri: `${character.thumbnail.path}.${character.thumbnail.extension}`,
          }}
          style={styles[themeState.darkMode].image}
        />
        <View style={styles[themeState.darkMode].characterNameView}>
          <Text style={styles[themeState.darkMode].characterName}>
            {character.name}
          </Text>
        </View>
        <Text style={styles[themeState.darkMode].description}>
          {character.description}
        </Text>
        <View style={styles[themeState.darkMode].comicsView}>
          <Text
            style={styles[themeState.darkMode].comicsNumber}
            numberOfLines={1}>
            {t('comics')}: {character.comics.available}
            {'  '}
          </Text>
          <TouchableOpacity onPress={handleComicsVisible}>
            <Icon
              name="table-arrow-right"
              size={30}
              color={themeState.darkMode === 'light' ? 'gray' : 'white'}
            />
          </TouchableOpacity>
        </View>
        {comicsVisible &&
          character.comics.items.map(item => renderComics(item))}
      </ScrollView>
    </SafeAreaView>
  );
}
