import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useContext} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../styles/colors';
import {ThemeContext} from '../context/ThemeContext/ThemeProvider';
import CharacterDetail from '../pages/CharacterDetail';
import Characters from '../pages/Characters';
import Comics from '../pages/Comics';
import ComicsDetail from '../pages/ComicsDetail';
import FavoriteCharacters from '../pages/FavoriteCharacters';
import FavoriteComics from '../pages/FavoriteComics';
import HomePage from '../pages/HomePage';
import routes from './routes';

export default function Navigation() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const {themeState} = useContext(ThemeContext);

  const ComicsTab = () => {
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
              themeState.darkMode === 'light'
                ? 'white'
                : colors.darkThemeColor1,
          },
        }}>
        <Tab.Screen
          name={routes.COMICS_PAGE}
          component={Comics}
          options={{
            tabBarIcon: ({...rest}) => (
              <Icon name="book-open-page-variant" {...rest} />
            ),
          }}
        />
        <Tab.Screen
          name={routes.FAVORITE_COMICS_PAGE}
          component={FavoriteComics}
          options={{
            tabBarIcon: ({...rest}) => <Icon name="star" {...rest} />,
          }}
        />
      </Tab.Navigator>
    );
  };

  const CharactersTab = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor:
              themeState.darkMode === 'light'
                ? 'white'
                : colors.darkThemeColor1,
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
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={routes.HOME_PAGE}
          component={HomePage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={routes.CHARACTERS_STACK}
          component={CharactersTab}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={routes.CHARACTER_DETAIL}
          component={CharacterDetail}
          options={({navigation}) => ({
            title: 'Details',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor:
                themeState.darkMode === 'light'
                  ? 'white'
                  : colors.darkThemeBackground,
            },
            headerTintColor: themeState.darkMode === 'light' ? 'gray' : 'white',
            headerRight: () => (
              <Icon
                name="home"
                size={30}
                onPress={() => navigation.navigate(routes.HOME_PAGE)}
                color={themeState.darkMode === 'light' ? 'gray' : 'white'}
              />
            ),
            headerLeft: () => (
              <Icon
                name="arrow-left"
                size={30}
                onPress={() => navigation.goBack()}
                color={themeState.darkMode === 'light' ? 'gray' : 'white'}
              />
            ),
          })}
        />
        <Stack.Screen
          name={routes.COMICS_STACK}
          component={ComicsTab}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={routes.COMICS_DETAIL}
          component={ComicsDetail}
          options={({navigation}) => ({
            title: 'Details',
            headerTitleAlign: 'center',
            headerRight: () => (
              <Icon
                name="home"
                size={30}
                onPress={() => navigation.navigate(routes.HOME_PAGE)}
              />
            ),
            headerLeft: () => (
              <Icon
                name="arrow-left"
                size={30}
                onPress={() => navigation.goBack()}
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
