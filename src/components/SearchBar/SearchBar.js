import React, {useContext} from 'react';
import {useTranslation} from 'react-i18next';
import {TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ThemeContext} from '../../context/ThemeContext/ThemeProvider';
import styles from './SearchBar.style';

export default function SearchBar({onSearch}) {
  const {themeState} = useContext(ThemeContext);

  const {t} = useTranslation();

  return (
    <View style={styles[themeState.darkMode].container}>
      <Icon
        name="magnify"
        size={30}
        color={themeState.darkMode === 'light' ? 'gray' : 'white'}
      />
      <TextInput
        placeholder={t('Search Placeholder')}
        placeholderTextColor={
          themeState.darkMode === 'light' ? 'black' : 'white'
        }
        onChangeText={onSearch}
        style={styles[themeState.darkMode].input}
      />
    </View>
  );
}
