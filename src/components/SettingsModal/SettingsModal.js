import React, {useContext, useState} from 'react';
import {Switch, View, Text} from 'react-native';
import i18n from '../../lang/_i18n';
import Modal from 'react-native-modal';
import {ThemeContext} from '../../context/ThemeContext/ThemeProvider';
import styles from './SettingsModal.style';
import DropDownPicker from 'react-native-dropdown-picker';
import {useTranslation} from 'react-i18next';

export default function SettingsModal({
  settingsModalVisible,
  handleSettingsModalVisible,
}) {
  const {themeState, themeDispatch} = useContext(ThemeContext);

  const {t} = useTranslation();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'English', value: 'en'},
    {label: 'Türkçe', value: 'tr'},
  ]);

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
      onSwipeComplete={handleSettingsModalVisible}
      style={styles[themeState.darkMode].modal}>
      <View style={styles[themeState.darkMode].container}>
        <View>
          <Text style={styles[themeState.darkMode].text}>{t('Language')}</Text>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            onChangeValue={value => {
              handleChangeLanguage(value);
            }}
            style={styles[themeState.darkMode].dropdownPicker}
          />
        </View>
        <View style={styles[themeState.darkMode].switchView}>
          <Text style={styles[themeState.darkMode].text}>
            {t('Dark Theme')}
          </Text>
          <Switch
            trackColor={{false: '#767577', true: 'white'}}
            thumbColor={themeState.darkMode === 'dark' ? 'gray' : '#f4f3f4'}
            onValueChange={handleDarkTheme}
            value={themeState.darkMode === 'dark' ? true : false}
          />
        </View>
      </View>
    </Modal>
  );
}
