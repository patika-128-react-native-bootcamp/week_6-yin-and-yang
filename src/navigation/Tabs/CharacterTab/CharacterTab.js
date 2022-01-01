import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useContext} from 'react';
import {useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ThemeContext} from '../../../context/ThemeContext/ThemeProvider';
import Characters from '../../../pages/Characters';
import FavoriteCharacters from '../../../pages/FavoriteCharacters';
import colors from '../../../styles/colors';
import routes from '../../routes';

export default function CharacterTab() {
  const Tab = createBottomTabNavigator();

  const {themeState} = useContext(ThemeContext);

  const {t} = useTranslation();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor:
          themeState.darkMode === 'light'
            ? colors.lightThemeColorBlue
            : 'white',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor:
            themeState.darkMode === 'light' ? 'white' : colors.darkThemeColor1,
        },
      }}>
      <Tab.Screen
        name={routes.CHARACTERS_PAGE}
        component={Characters}
        options={{
          title: t('characters'),
          tabBarIcon: ({...rest}) => <Icon name="sword-cross" {...rest} />,
        }}
      />
      <Tab.Screen
        name={routes.FAVORITE_CHARACTERS_PAGE}
        component={FavoriteCharacters}
        options={{
          title: t('Favourite Characters'),
          tabBarIcon: ({...rest}) => <Icon name="star" {...rest} />,
        }}
      />
    </Tab.Navigator>
  );
}
