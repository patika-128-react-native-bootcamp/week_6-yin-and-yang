import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  Button,
} from 'react-native';
import styles from './CharacterCard.style';

export default function CharacterCard({character, onClick, onButtonClick}) {
  return (
    <View>
      <TouchableWithoutFeedback onPress={onClick}>
        <View style={styles.container}>
          <Image
            source={{
              uri: `${character.thumbnail.path}.${character.thumbnail.extension}`,
            }}
            style={styles.image}
          />
          <Text style={styles.characterName}>{character.name}</Text>
          <Text style={styles.contents} numberOfLines={1}>
            Comics: {character.comics.available}
          </Text>
          <Text style={styles.contents} numberOfLines={1}>
            Series: {character.series.available}
          </Text>
          <Text style={styles.contents} numberOfLines={1}>
            Stories: {character.stories.available}
          </Text>
          <Text style={styles.contents} numberOfLines={3}>
            {character.description}
          </Text>
        </View>
      </TouchableWithoutFeedback>
      <Button title="Add Favourites" onPress={onButtonClick}></Button>
    </View>
  );
}
