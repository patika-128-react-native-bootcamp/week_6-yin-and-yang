import React from 'react';
import {TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './SearchBar.style';

export default function SearchBar({onSearch}) {
  return (
    <View style={styles.container}>
      <Icon name="magnify" size={30} />
      <TextInput placeholder="Search..." onChangeText={onSearch} style={styles.input} />
    </View>
  );
}
