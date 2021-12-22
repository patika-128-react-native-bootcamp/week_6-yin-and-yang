import {useRoute} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';

export default function CharacterDetail() {
  const route = useRoute();

  const {character} = route.params;

  return (
    <View>
      <Text>{character.name}</Text>
    </View>
  );
}
