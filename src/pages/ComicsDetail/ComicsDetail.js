import {useRoute} from '@react-navigation/native';
import React, {useContext} from 'react';
import {View, Text, SafeAreaView, Image, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ThemeContext} from '../../context/ThemeContext/ThemeProvider';
import styles from './ComicsDetail.style';

export default function ComicsDetail() {
  const route = useRoute();

  const {comics} = route.params;

  const {themeState, themeDispatch} = useContext(ThemeContext);

  const renderCreators = item => (
    <View style={styles[themeState.darkMode].contentListView}>
      <Text style={styles[themeState.darkMode].contents}>
        • {item.name} / {item.role}
      </Text>
    </View>
  );

  const renderCharacters = item => (
    <View style={styles[themeState.darkMode].contentListView}>
      <Text style={styles[themeState.darkMode].contents}>• {item.name}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles[themeState.darkMode].container}>
      <ScrollView>
        <Image
          source={{
            uri: `${comics.thumbnail.path}.${comics.thumbnail.extension}`,
          }}
          style={styles[themeState.darkMode].image}
        />
        <View style={styles[themeState.darkMode].comicsNameView}>
          <Text style={styles[themeState.darkMode].comicsName}>
            {comics.title}
          </Text>
        </View>
        <Text style={styles[themeState.darkMode].description}>
          {comics.description}
        </Text>
        <View style={styles[themeState.darkMode].contentView}>
          <Text
            style={styles[themeState.darkMode].contentTitle}
            numberOfLines={1}>
            Creators: {comics.creators.available}
          </Text>
        </View>
        {comics.creators.items.map(item => renderCreators(item))}
        <View style={styles[themeState.darkMode].contentView}>
          <Text
            style={styles[themeState.darkMode].contentTitle}
            numberOfLines={1}>
            Characters: {comics.characters.available}
          </Text>
        </View>
        {comics.characters.items.map(item => renderCharacters(item))}
      </ScrollView>
    </SafeAreaView>
  );
}
