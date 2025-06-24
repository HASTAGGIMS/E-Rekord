import { useAuth } from '@clerk/clerk-expo';
import { Redirect, Stack } from 'expo-router';
import { StatusBar } from 'react-native';

export default function AuthRoutesLayout() {
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    return <Redirect href={'/'} />;
  }

  return (
    <>
      <StatusBar hidden={true} />
      <Stack 
      screenOptions={{
    headerShown: false,
    animation: 'fade'
  }}/>
    </>
  );
}