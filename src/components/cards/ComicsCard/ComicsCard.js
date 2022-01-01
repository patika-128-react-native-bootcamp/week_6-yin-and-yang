import React, {useContext} from 'react';
import {View, Text, TouchableWithoutFeedback, Image} from 'react-native';
import {ThemeContext} from '../../../context/ThemeContext/ThemeProvider';
import styles from './ComicsCard.style';

export default function ComicsCard({comics, onClick}) {
  const {themeState} = useContext(ThemeContext);

  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles[themeState.darkMode].container}>
        <Image
          source={{
            uri: `${comics.thumbnail.path}.${comics.thumbnail.extension}`,
          }}
          style={styles[themeState.darkMode].image}
        />
        <Text style={styles[themeState.darkMode].comicsName}>
          {comics.title}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
