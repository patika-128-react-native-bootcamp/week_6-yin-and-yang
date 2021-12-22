import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import CharacterDetail from '../pages/CharacterDetail';
import Characters from '../pages/Characters';
import Comics from '../pages/Comics';
import ComicsDetail from '../pages/ComicsDetail';
import FavoriteCharacters from '../pages/FavoriteCharacters';
import FavoriteComics from '../pages/FavoriteComics';
import HomePage from '../pages/HomePage';
import routes from './routes';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ComicsTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={routes.COMICS_PAGE} component={Comics} />
      <Tab.Screen
        name={routes.FAVORITE_COMICS_PAGE}
        component={FavoriteComics}
      />
      <Tab.Screen name={routes.HOME_PAGE} component={HomePage} />
    </Tab.Navigator>
  );
};

const CharactersTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={routes.CHARACTERS_PAGE} component={Characters} />
      <Tab.Screen
        name={routes.FAVORITE_CHARACTERS_PAGE}
        component={FavoriteCharacters}
      />
      <Tab.Screen name={routes.HOME_PAGE} component={HomePage} />
    </Tab.Navigator>
  );
};

export default function Navigation() {
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
          
        />
        <Stack.Screen
          name={routes.COMICS_STACK}
          component={ComicsTab}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={routes.COMICS_DETAIL}
          component={ComicsDetail}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
