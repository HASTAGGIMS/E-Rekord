import { SignOutButton } from '@/app/components/SignOutButton';
import { SignedIn, SignedOut, useUser } from '@clerk/clerk-expo';
import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function HomePage() {
  const { user } = useUser();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <SignedIn>
        <Text>Welcome {user?.emailAddresses[0]?.emailAddress}</Text>
        <SignOutButton />
      </SignedIn>
      <SignedOut>
        <Link href="/(auth)/login">
          <Text style={{ color: 'blue' }}>Sign in</Text>
        </Link>
        <Text> or </Text>
        <Link href="/(auth)/signup">
          <Text style={{ color: 'blue' }}>Sign up</Text>
        </Link>
      </SignedOut>
    </View>
  );
}