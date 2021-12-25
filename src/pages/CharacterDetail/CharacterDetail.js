import {useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './CharacterDetail.style';

export default function CharacterDetail() {
  const route = useRoute();

  const [comicsVisible, setComicsVisible] = useState(false);

  const {character} = route.params;

  function handleComicsVisible() {
    setComicsVisible(!comicsVisible);
  }

  const renderComics = item => (
    <View style={styles.comicsListView}>
      <Text style={styles.comics}>• {item.name}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          source={{
            uri: `${character.thumbnail.path}.${character.thumbnail.extension}`,
          }}
          style={styles.image}
        />
        <View style={styles.characterNameView}>
          <Text style={styles.characterName}>{character.name}</Text>
        </View>
        <Text style={styles.description}>{character.description}</Text>
        <View style={styles.comicsView}>
          <Text style={styles.contents} numberOfLines={1}>
            Comics: {character.comics.available}{'  '}
          </Text>
          <TouchableOpacity onPress={handleComicsVisible}>
            <Icon name="table-arrow-right" size={30} />
          </TouchableOpacity>
        </View>
        {comicsVisible &&
          character.comics.items.map(item => renderComics(item))}
      </ScrollView>
    </SafeAreaView>
  );
}
