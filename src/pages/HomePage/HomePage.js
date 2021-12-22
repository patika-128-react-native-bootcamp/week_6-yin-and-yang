import React from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import routes from '../../navigation/routes';
import MarvelCharacters from '../../assets/MarvelCharacters.jpg';
import MarvelComics from '../../assets/MarvelComics.jpg';
import styles from './HomePage.style';

export default function HomePage({navigation}) {
  function navigateToCharacters() {
    navigation.navigate(routes.CHARACTERS_STACK);
  }

  function navigateToComics() {
    navigation.navigate(routes.COMICS_STACK);
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={navigateToCharacters}>
        <ImageBackground
          source={MarvelCharacters}
          style={styles.imageBackground}>
          <View style={styles.textView}>
            <Text style={styles.text}>CHARACTERS</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToComics}>
        <ImageBackground source={MarvelComics} style={styles.imageBackground}>
          <View style={styles.textView}>
            <Text style={styles.text}>COMICS</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </SafeAreaView>
  );
}