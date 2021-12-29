import React, {useContext} from 'react';
import {useTranslation} from 'react-i18next';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ThemeContext} from '../../../context/ThemeContext/ThemeProvider';
import styles from './CharacterCard.style';

export default function CharacterCard({character, onClick}) {
  const {themeState} = useContext(ThemeContext);

  const {t} = useTranslation();

  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles[themeState.darkMode].container}>
        <ImageBackground
          source={{
            uri: `${character.thumbnail.path}.${character.thumbnail.extension}`,
          }}
          style={styles[themeState.darkMode].image}>
          <Icon
            name="star"
            size={40}
            color={
              character.notFavourite === false
                ? '#FFD700'
                : 'rgba(50, 50, 50, 0.6)'
            }></Icon>
        </ImageBackground>
        <Text style={styles[themeState.darkMode].characterName}>
          {character.name}
        </Text>
        <Text style={styles[themeState.darkMode].comics} numberOfLines={1}>
          {t('comics')}: {character.comics.available}
        </Text>

        <Text style={styles[themeState.darkMode].description} numberOfLines={3}>
          {character.description}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
