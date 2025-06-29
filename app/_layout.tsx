import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" hidden />
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Slot />
      </View>
    </SafeAreaProvider>
  );
}