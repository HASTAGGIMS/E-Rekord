import { useSSO } from "@clerk/clerk-expo";
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from 'constants/Themes';
import { useRouter } from 'expo-router';
import React from 'react';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../../auth.styles';

const { width } = Dimensions.get('window');
const INPUT_WIDTH = width * 0.8;



export default function login(){

const {startSSOFlow}= useSSO()
const router = useRouter();

const handleGoogleSignIn = async () => {
  try {
    const {createdSessionId,setActive} = await startSSOFlow({strategy:"oauth_google"});

    if(setActive && createdSessionId){
      setActive({session:createdSessionId});
      router.replace("/(tabs)/Home")
    }
  } 
  
  catch (error) {
      console.log("Oauth error:", error);
  }
}

  return (
    <View style={styles.container}>

    {/*BRAND AND TAGLINE*/}
      <View style={styles.brandSection}>
        <View style={styles.logoContainer}>
          <Image source={require('../../assets/images/adaptive-icon-er.png')}
                  style={{width:120, height:120}}
                  resizeMode="contain"/>
        </View>
        <Text style={styles.appName}>E-rekord</Text>
        <Text style={styles.tagLine}>Kita mo, kita mo</Text>
      </View>

    {/*ILLUSTRATION*/}
      <View style={styles.illustrationContainer}>
        <Image 
        source={require("../../assets/images/image-login.png")}
        style={styles.illustration}
        resizeMode="cover"
        />
      </View>

    {/*GOOGLE SIGN IN*/}
      <View style={styles.LoginSection}>
        <TouchableOpacity
        style={styles.googleButton}
        onPress={handleGoogleSignIn}
        activeOpacity={0.9}
        >
          <View style={styles.googleIconContainer}>
            <Ionicons name="logo-google" size={20} color={COLORS.surface}/>
          </View>
          <Text>Continue with Google</Text>
        </TouchableOpacity>

        <Text style={styles.termsText}>By continuing, you agree to our Terms and Privacy Policy</Text>
      </View>
    
    </View>
  )
}