import { COLORS } from "@/constants/Themes"
import { Ionicons } from "@expo/vector-icons"
import { Tabs } from 'expo-router'

export default function tabLayout() {
  return (
    <Tabs
      screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: COLORS.primary,
      tabBarInactiveTintColor: COLORS.background,
      tabBarStyle:{
        elevation: 0,
        backgroundColor: "#f0e4d4"
      } 
      }}
    >
      <Tabs.Screen 
        name='Home'
        options={{
          tabBarIcon: ({size,color})=> <Ionicons name="home" size={size} color={color}/>
        }}
      />

      <Tabs.Screen 
        name='Products'
        options={{
          tabBarIcon: ({size,color})=> <Ionicons name="bag" size={size} color={color}/>
        }}
      />

      <Tabs.Screen 
        name='Logs'
        options={{
          tabBarIcon: ({size,color})=> <Ionicons name="file-tray-full-outline" size={size} color={color}/>
        }}
      />

      <Tabs.Screen 
        name='Analysis'
        options={{
          tabBarIcon: ({size,color})=> <Ionicons name="stats-chart-outline" size={size} color={color}/>
        }}
      />
    </Tabs>
  )
}