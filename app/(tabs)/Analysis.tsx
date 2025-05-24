import React from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Products() {
    const insets = useSafeAreaInsets();

  return (
    <View  style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        flex: 1,
        backgroundColor: '#f5f5f0',
      }}>
      <Text>products</Text>
    </View>
  )
}