import { useSignUp } from '@clerk/clerk-expo'
import { Link, useRouter } from 'expo-router'
import * as React from 'react'
import { Dimensions, Image, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from '../../auth.styles'

const { width } = Dimensions.get('window');
const INPUT_WIDTH = width * 0.8;

export default function SignUpScreen() {
  const { isLoaded, signUp, setActive } = useSignUp()
  const router = useRouter()

  const [emailAddress, setEmailAddress] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [pendingVerification, setPendingVerification] = React.useState(false)
  const [code, setCode] = React.useState('')
  const [showPassword, setShowPassword] = React.useState(false);

  // Handle submission of sign-up form
  const onSignUpPress = async () => {
    if (!isLoaded) return

    // Start sign-up process using email and password provided
    try {
      await signUp.create({
        emailAddress,
        password,
      })

      // Send user an email with verification code
      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })

      // Set 'pendingVerification' to true to display second form
      // and capture OTP code
      setPendingVerification(true)
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2))
    }
  }

  // Handle submission of verification form
  const onVerifyPress = async () => {
    if (!isLoaded) return

    try {
      // Use the code the user provided to attempt verification
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code,
      })

      // If verification was completed, set the session to active
      // and redirect the user
      if (signUpAttempt.status === 'complete') {
        await setActive({ session: signUpAttempt.createdSessionId })
        router.replace('/')
      } else {
        // If the status is not complete, check why. User may need to
        // complete further steps.
        console.error(JSON.stringify(signUpAttempt, null, 2))
      }
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2))
    }
  }

  if (pendingVerification) {
    return (
      <>
        <Text>Verify your email</Text>
        <TextInput
          value={code}
          placeholder="Enter your verification code"
          onChangeText={(code) => setCode(code)}
        />
        <TouchableOpacity onPress={onVerifyPress}>
          <Text>Verify</Text>
        </TouchableOpacity>
      </>
    )
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
                <Text style={styles.title}>Sign Up</Text>
              </View>
        


        <TextInput style={[styles.input,{width:INPUT_WIDTH}]}
          autoCapitalize="none"
          value={emailAddress}
          placeholder="Enter email"
          placeholderTextColor="#999"
          keyboardType="email-address"
          onChangeText={(email) => setEmailAddress(email)}
        />

        
        <View style={[styles.passwordContainer,{width: INPUT_WIDTH}]}>
        <TextInput
          value={password}
          placeholder="Enter password"
          placeholderTextColor="#999"
          secureTextEntry={!showPassword}
          onChangeText={(password) => setPassword(password)}
          style={styles.passwordInput}
          autoCapitalize="none"
        />
        <Pressable
          style={styles.showButton}
          onPress={() => setShowPassword(!showPassword)}
        >
          <Text style={styles.showButtonText}>
            {showPassword ? 'Hide' : 'Show'}
          </Text>
        </Pressable>
      </View>




        <TouchableOpacity  style ={[styles.continueButton, {width:INPUT_WIDTH}]} onPress={onSignUpPress}>
                <Text style={styles.buttonText}>Continue</Text>
              </TouchableOpacity>

        
              <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Already have an account? </Text>
        <Pressable onPress={() => router.push('/login')}>
          <Text style={styles.signUpLinkText}>Sign In</Text>
        </Pressable>
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