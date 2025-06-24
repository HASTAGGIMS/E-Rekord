import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "./constants/Themes";

const {width, height} = Dimensions.get("window");

  export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.secondary
    },
    
    brandSection: {
      alignItems: "center",
      marginTop: height * 0.12
    },

    appName: {
      fontSize: 42,
      fontWeight: "700",
      fontFamily: "JetBrainsMono-Medium",
      color: COLORS.primary,
      letterSpacing: 0.5,
      marginBottom: 8,
  },

    tagLine: {
      fontSize: 16,
      color: COLORS.grey,
      letterSpacing: 1,
      textTransform: "lowercase",
  },

    illustrationContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 40,
  },

    illustration: {
      width: width * 0.75,
      height: width * 0.75,
      maxHeight: 280,
  },

    logoContainer: {
      width: 60,
      height: 60,
      borderRadius: 18,
      backgroundColor: COLORS.background,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 20,
    },

    LoginSection: {
    width: "100%",
    paddingHorizontal: 24,
    paddingBottom: 40,
    paddingTop: 30,
    alignItems: "center",
  },

    googleButton: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: COLORS.white, 
      paddingVertical: 16,
      paddingHorizontal: 24,
      borderRadius: 14,
      marginBottom: 20,
      width: "100%",
      maxWidth: 300,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.15,
      shadowRadius: 12,
      elevation: 5,
  },

    googleIconContainer: {
      width: 24,
      height: 24,
      justifyContent: "center",
      alignItems: "center",
      marginRight: 12,
  },

    googleButtonText: {
      fontSize: 16,
      fontWeight: "600",
      color: COLORS.surface,
  },
    termsText: {
      textAlign: "center",
      fontSize: 12,
      color: COLORS.grey,
      maxWidth: 280,
  },


  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  continueButton: {
    backgroundColor: COLORS.primary,
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    elevation: 2, // for Android shadow
    shadowColor: '#000', // for iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  signUpText: {
    color: '#666',
    fontSize: 14,
  },
  signUpLink: {
    
  },

  signUpLinkText: {
    color: COLORS.primary,
    fontSize: 14,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },

  guest: {
    color: COLORS.primary,
    fontSize: 14,
    fontWeight: '600',
    textDecorationLine: 'none',
  },

  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
  },
  passwordInput: {
    flex: 1,
    height: 50,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  showButton: {
    paddingHorizontal: 15,
    height: 50,
    justifyContent: 'center',
  },
  showButtonText: {
    color: COLORS.primary,
    fontSize: 14,
    fontWeight: '600',
  },

  header: {
    marginBottom: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#333',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },


});
