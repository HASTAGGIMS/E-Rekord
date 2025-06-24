import { useSignIn } from '@clerk/clerk-expo'
import { Link, useRouter } from 'expo-router'
import React from 'react'
import { Dimensions, Image, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from '../../auth.styles'

const { width } = Dimensions.get('window');
const INPUT_WIDTH = width * 0.8;

export default function Page() {
  const { signIn, setActive, isLoaded } = useSignIn()
  const router = useRouter()

  const [emailAddress, setEmailAddress] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [showPassword, setShowPassword] = React.useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  // Handle the submission of the sign-in form
  const onSignInPress = async () => {
    if (!isLoaded) return

    // Start the sign-in process using the email and password provided
    try {
      const signInAttempt = await signIn.create({
        identifier: emailAddress,
        password,
      })

      // If sign-in process is complete, set the created session as active
      // and redirect the user
      if (signInAttempt.status === 'complete') {
        await setActive({ session: signInAttempt.createdSessionId })
        router.replace('/')
      } else {
        // If the status isn't complete, check why. User might need to
        // complete further steps.
        console.error(JSON.stringify(signInAttempt, null, 2))
      }
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2))
    }
  }

  return (
    <View style={styles.container}>

      <View style={styles.brandSection}>
        <View style={styles.logoContainer}>
          <Image source={require('../../assets/images/adaptive-icon-er.png')}
                  style={{width:120, height:120}}
                  resizeMode="contain"/>
        </View>
        <Text style={styles.appName}>E-rekord</Text>
        <Text style={styles.tagLine}>Kita mo, kita mo</Text>
      </View>


      <View style={styles.LoginSection}>
        
        <View style={styles.header}>
        <Text style={styles.title}>Sign In</Text>
      </View>

      <TextInput  style={[styles.input,{width:INPUT_WIDTH}]}
        autoCapitalize="none"
        value={emailAddress}
        placeholder="Enter email"
        placeholderTextColor="#999"
        keyboardType="email-address"
        onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
      />



      <View style={[styles.passwordContainer, { width: INPUT_WIDTH }]}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Enter password"
          placeholderTextColor="#999"
          value={password}
          onChangeText={(password)=> setPassword(password)}
          secureTextEntry={!showPassword}
          autoCapitalize="none"
        />
        <Pressable 
          style={styles.showButton}
          onPress={toggleShowPassword}
        >
          <Text style={styles.showButtonText}>
            {showPassword ? 'Hide' : 'Show'}
          </Text>
        </Pressable>
      </View>




      <TouchableOpacity  style ={[styles.continueButton, {width:INPUT_WIDTH}]} onPress={onSignInPress}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

      
      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Don't have an account? </Text>
        <Link href="/signup" style={styles.signUpLink}>
          <Text style={styles.signUpLinkText}>Sign up</Text>
        </Link>
      </View>

      <View style={styles.signUpContainer}>
        <Link href='../../(tabs)/Home' style={styles.signUpLink}>
          <Text style={styles.guest}>Continue without signing in</Text>
        </Link>
      </View>
      </View>
    
    </View>
  )
}