import React from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Products() {
    const insets = useSafeAreaInsets();

  return (
    <View  style={{
        backgroundColor: '#f5f5f0',
      }}>
      <Text>Analysis</Text>
    </View>
  )
}