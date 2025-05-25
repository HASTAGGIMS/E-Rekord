import { Ionicons } from "@expo/vector-icons";
import { useRouter } from 'expo-router';
import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

export default function Header() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        {}
        <Image
          source={require('../../assets/images/adaptive-icon-er.png')} 
          style={styles.logo}
          resizeMode="contain"
        />

        { }
        <View style={styles.rightControls}>
          <View style={styles.rightControls}>
          <TouchableOpacity onPress={() => router.push('/(tabs)/settings')}>
            <Ionicons name="settings-outline" size={24} color="#18746c" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push('/(tabs)/notification')}>
            <Ionicons name="notifications-outline" size={28} color="#18746c" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push('/(tabs)/account')}>
            <Ionicons name="person-circle-outline" size={28} color="#18746c" />
          </TouchableOpacity>
          
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    backgroundColor: '#f5f5f0',
  },
  container: {
    height: 90,
    paddingHorizontal: 16,
    paddingLeft: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 0
  },
  logo: {
    width: 100,
    height: 100
  },
  rightControls: {
    flexDirection: 'row',
    gap: 16, 
  },
  
});
