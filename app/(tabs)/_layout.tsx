import { Ionicons } from "@expo/vector-icons"
import { Tabs } from 'expo-router'

export default function tabLayout() {
  return (
    <Tabs
      screenOptions={{
        
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

      <Tabs.Screen 
        name='Account'
        options={{
          tabBarIcon: ({size,color})=> <Ionicons name="person-outline" size={size} color={color}/>
        }}
      />
    </Tabs>
  )
}