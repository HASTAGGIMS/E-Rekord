import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "constants/Themes";
import { Tabs } from 'expo-router';
import { View } from "react-native";
import Header from "../components/header";

export default function TabLayout() {


  return (
    <View style={{ flex: 1 }}>
      
      <Header />
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: COLORS.secondary,
          tabBarInactiveTintColor: COLORS.background,
          tabBarStyle: {
            elevation: 0,
            backgroundColor: COLORS.primary
          } 
        }}
      >
        <Tabs.Screen 
          name='Home'
          options={{
            tabBarIcon: ({size, color}: {size: number; color: string}) => (
              <Ionicons name="home-outline" size={size} color={color}/>
            )
          }}
        />

        <Tabs.Screen 
          name='Products'
          options={{
            tabBarIcon: ({size, color}: {size: number; color: string}) => (
              <Ionicons name="bag-outline" size={size} color={color}/>
            )
          }}
        />

        <Tabs.Screen 
          name='Logs'
          options={{
            tabBarIcon: ({size, color}: {size: number; color: string}) => (
              <Ionicons name="file-tray-full-outline" size={size} color={color}/>
            )
          }}
        />

        <Tabs.Screen 
          name='Analysis'
          options={{
            tabBarIcon: ({size, color}: {size: number; color: string}) => (
              <Ionicons name="stats-chart-outline" size={size} color={color}/>
            )
          }}
        />

        <Tabs.Screen
          name="account"
          options={{
            href: null 
          }}
        />

        <Tabs.Screen
          name="settings"
          options={{
            href: null 
          }}
        />

        <Tabs.Screen
          name="notification"
          options={{
            href: null 
          }}
        />
      </Tabs>
    </View>
  );
}
