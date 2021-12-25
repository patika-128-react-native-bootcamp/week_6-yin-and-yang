import {useRoute} from '@react-navigation/native';
import React from 'react';
import {View, Text, SafeAreaView, Image, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './ComicsDetail.style';

export default function ComicsDetail() {
  const route = useRoute();

  const {comics} = route.params;

  const renderCreators = item => (
    <View style={styles.contentListView}>
      <Text style={styles.contents}>
        • {item.name}  /  {item.role}
      </Text>
    </View>
  );

  const renderCharacters = item => (
    <View style={styles.contentListView}>
      <Text style={styles.contents}>• {item.name}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          source={{
            uri: `${comics.thumbnail.path}.${comics.thumbnail.extension}`,
          }}
          style={styles.image}
        />
        <View style={styles.comicsNameView}>
          <Text style={styles.comicsName}>{comics.title}</Text>
        </View>
        <Text style={styles.description}>{comics.description}</Text>
        <View style={styles.contentView}>
          <Text style={styles.contentTitle} numberOfLines={1}>
            Creators: {comics.creators.available}
          </Text>
        </View>
        {comics.creators.items.map(item => renderCreators(item))}
        <View style={styles.contentView}>
          <Text style={styles.contentTitle} numberOfLines={1}>
            Characters: {comics.characters.available}
          </Text>
        </View>
        {comics.characters.items.map(item => renderCharacters(item))}
      </ScrollView>
    </SafeAreaView>
  );
}
