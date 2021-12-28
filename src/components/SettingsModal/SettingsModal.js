import React, {useContext} from 'react';
import {View, Text, Switch, Button} from 'react-native';
import i18n from '../../lang/_i18n';
import Modal from 'react-native-modal';
import {ThemeContext} from '../../context/ThemeContext/ThemeProvider';

export default function SettingsModal({
  settingsModalVisible,
  handleSettingsModalVisible,
}) {
  const {themeState, themeDispatch} = useContext(ThemeContext);

  function handleDarkTheme() {
    if (themeState.darkMode === 'dark') themeDispatch({type: 'LIGHT_MODE'});
    else themeDispatch({type: 'DARK_MODE'});
  }

  function handleChangeLanguage(value) {
    i18n.changeLanguage(value);
  }

  return (
    <Modal
      isVisible={settingsModalVisible}
      onBackButtonPress={handleSettingsModalVisible}
      onBackdropPress={handleSettingsModalVisible}
      onSwipeComplete={handleSettingsModalVisible}>
      <Switch
        trackColor={{false: '#767577', true: 'white'}}
        thumbColor={themeState.darkMode === 'dark' ? 'gray' : '#f4f3f4'}
        onValueChange={handleDarkTheme}
        value={themeState.darkMode === 'dark' ? true : false}
      />
      <Button title="English" onPress={() => handleChangeLanguage('en')} />
      <Button title="Türkçe" onPress={() => handleChangeLanguage('tr')} />
    </Modal>
  );
}
