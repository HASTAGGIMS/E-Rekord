import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return( <Stack>
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1}}>
        <Stack.Screen name="Home" options={{title: "Home"}}/>
        <Stack.Screen name="Products" options={{title: "Products"}}/>
        <Stack.Screen name="Analysis" options={{title: "Analysis"}}/>
        <Stack.Screen name="Logs" options={{title: "Logs"}}/>
        <Stack.Screen name="Account" options={{title: "Account"}}/>
      </SafeAreaView>
    </SafeAreaProvider>
  </Stack>
);
}
