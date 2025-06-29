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
import { COLORS } from '../../constants/Themes';


export default function Header() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
                  <Image source={require('../../assets/images/adaptive-icon-er.png')}
                          style={{width:120, height:120}}
                          resizeMode="contain"/>
                </View>

        { }
        <View style={styles.rightControls}>
          <View style={styles.rightControls}>
          <TouchableOpacity onPress={() => router.push('/(tabs)/settings')}>
            <Ionicons name="settings-outline" size={24} color= {COLORS.secondary} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push('/(tabs)/notification')}>
            <Ionicons name="notifications-outline" size={28} color={COLORS.secondary} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push('/(tabs)/account')}>
            <Ionicons name="person-circle-outline" size={28} color={COLORS.secondary} />
          </TouchableOpacity>
          
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    backgroundColor: COLORS.primary,
  },
  container: {
    height: 90,
    paddingHorizontal: 16,
    paddingLeft: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 20
  },
  logo: {
    width: 100,
    height: 100
  },
  rightControls: {
    flexDirection: 'row',
    gap: 16,
    paddingBottom:10
  },

  logoContainer:{
    width: 60,
          height: 60,
          borderRadius: 18,
          backgroundColor: COLORS.background,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 20,
  }
  
});
