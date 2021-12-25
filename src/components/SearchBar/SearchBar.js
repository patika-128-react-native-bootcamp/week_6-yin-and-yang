import React, {useContext} from 'react';
import {TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ThemeContext} from '../../context/ThemeContext/ThemeProvider';
import styles from './SearchBar.style';

export default function SearchBar({onSearch}) {
  const {themeState, themeDispatch} = useContext(ThemeContext);

  return (
    <View style={styles[themeState.darkMode].container}>
      <Icon
        name="magnify"
        size={30}
        color={themeState.darkMode === 'light' ? 'gray' : 'white'}
      />
      <TextInput
        placeholder="Search..."
        placeholderTextColor={
          themeState.darkMode === 'light' ? 'black' : 'white'
        }
        onChangeText={onSearch}
        style={styles[themeState.darkMode].input}
      />
    </View>
  );
}
