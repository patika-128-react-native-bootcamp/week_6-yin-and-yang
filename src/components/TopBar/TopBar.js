import React, {useContext, useState} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ThemeContext} from '../../context/ThemeContext/ThemeProvider';
import SettingsModal from '../SettingsModal';
import styles from './TopBar.style';

export default function TopBar({onHomePress}) {
  const {themeState, themeDispatch} = useContext(ThemeContext);
  const [settingsModalVisible, setSettingsModalVisible] = useState(false);

  function handleSettingsModalVisible() {
    setSettingsModalVisible(!settingsModalVisible);
  }

  return (
    <View style={styles[themeState.darkMode].container}>
      <Icon
        name="home"
        size={30}
        color={themeState.darkMode === 'light' ? 'gray' : 'white'}
        onPress={onHomePress}
      />
      <Icon
        name="cog-outline"
        size={30}
        color={themeState.darkMode === 'light' ? 'gray' : 'white'}
        onPress={handleSettingsModalVisible}
      />
      <SettingsModal
        settingsModalVisible={settingsModalVisible}
        handleSettingsModalVisible={handleSettingsModalVisible}
      />
    </View>
  );
}
