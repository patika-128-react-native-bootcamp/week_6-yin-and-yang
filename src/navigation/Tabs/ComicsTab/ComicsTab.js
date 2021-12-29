import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useContext} from 'react';
import {useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ThemeContext} from '../../../context/ThemeContext/ThemeProvider';
import Comics from '../../../pages/Comics';
import FavoriteComics from '../../../pages/FavoriteComics';
import colors from '../../../styles/colors';
import routes from '../../routes';

export default function ComicsTab() {
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
        name={routes.COMICS_PAGE}
        component={Comics}
        options={{
          title: t('comics'),
          tabBarIcon: ({...rest}) => (
            <Icon name="book-open-page-variant" {...rest} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.FAVORITE_COMICS_PAGE}
        component={FavoriteComics}
        options={{
          title: t('Favourite Comics'),
          tabBarIcon: ({...rest}) => <Icon name="star" {...rest} />,
        }}
      />
    </Tab.Navigator>
  );
}
