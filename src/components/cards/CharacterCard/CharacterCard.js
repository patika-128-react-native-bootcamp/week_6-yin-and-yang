import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  ImageBackground,
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
          <Icon
            name="star"
            size={40}
            color={
              character.notFavourite === false
                ? '#FFD700'
                : 'rgba(50, 50, 50, 0.6)'
            }></Icon>
        </ImageBackground>
        <Text style={styles.characterName}>{character.name}</Text>
        <Text style={styles.comics} numberOfLines={1}>
          Comics: {character.comics.available}
        </Text>
        
        <Text style={styles.description} numberOfLines={3}>
          {character.description}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
