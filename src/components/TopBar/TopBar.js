import React, {useContext} from 'react';
import {Switch, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ThemeContext} from '../../context/ThemeContext/ThemeProvider';
import styles from './TopBar.style';

export default function TopBar({onHomePress}) {
  const {themeState, themeDispatch} = useContext(ThemeContext);

  function handleDarkTheme() {
    if (themeState.darkMode === 'dark') themeDispatch({type: 'LIGHT_MODE'});
    else themeDispatch({type: 'DARK_MODE'});
  }

  return (
    <View style={styles[themeState.darkMode].container}>
      <Icon
        name="home"
        size={30}
        color={themeState.darkMode === 'light' ? 'gray' : 'white'}
        onPress={onHomePress}
      />
      <Switch
        trackColor={{false: '#767577', true: 'white'}}
        thumbColor={themeState.darkMode === 'dark' ? 'gray' : '#f4f3f4'}
        onValueChange={handleDarkTheme}
        value={themeState.darkMode === 'dark' ? true : false}
      />
    </View>
  );
}
