import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  Button,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './CharacterCard.style';

export default function CharacterCard({character, onClick, onButtonClick}) {
  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.container}>
        <ImageBackground
          source={{
            uri: `${character.thumbnail.path}.${character.thumbnail.extension}`,
          }}
          style={styles.image}>
          <TouchableOpacity onPress={onButtonClick}>
            <Icon
              name="star"
              size={45}
              color={
                character.notFavourite === true ? 'rgba(50, 50, 50, 0.6)' : '#FFD700'
              }></Icon>
          </TouchableOpacity>
        </ImageBackground>

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
  );
}
