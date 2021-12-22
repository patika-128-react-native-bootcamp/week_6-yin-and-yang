import {useRoute} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';

export default function ComicsDetail() {
  const route = useRoute();

  const {comics} = route.params;

  return (
    <View>
      <Text>{comics.title}</Text>
    </View>
  );
}
