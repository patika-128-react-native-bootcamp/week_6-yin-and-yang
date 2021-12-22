import React from 'react';
import {View, Text, TouchableWithoutFeedback, Image} from 'react-native';
import styles from './ComicsCard.style';

export default function ComicsCard({comics, onClick}) {
  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.container}>
        <Image
          source={{
            uri: `${comics.thumbnail.path}.${comics.thumbnail.extension}`,
          }}
          style={styles.image}
        />
        <Text style={styles.comicsName}>{comics.title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
