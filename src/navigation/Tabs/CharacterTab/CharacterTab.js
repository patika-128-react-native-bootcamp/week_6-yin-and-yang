import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useContext} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ThemeContext} from '../../../context/ThemeContext/ThemeProvider';
import Characters from '../../../pages/Characters';
import FavoriteCharacters from '../../../pages/FavoriteCharacters';
import colors from '../../../styles/colors';
import routes from '../../routes';

export default function CharacterTab() {
  const Tab = createBottomTabNavigator();

  const {themeState} = useContext(ThemeContext);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor:
            themeState.darkMode === 'light' ? 'white' : colors.darkThemeColor1,
        },
      }}>
      <Tab.Screen
        name={routes.CHARACTERS_PAGE}
        component={Characters}
        options={{
          tabBarIcon: ({...rest}) => <Icon name="sword-cross" {...rest} />,
        }}
      />
      <Tab.Screen
        name={routes.FAVORITE_CHARACTERS_PAGE}
        component={FavoriteCharacters}
        options={{
          tabBarIcon: ({...rest}) => <Icon name="star" {...rest} />,
        }}
      />
    </Tab.Navigator>
  );
}
