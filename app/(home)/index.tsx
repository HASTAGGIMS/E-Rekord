import { SignedIn, SignedOut, useUser } from '@clerk/clerk-expo'
import { SignOutButton } from 'app/components/SignOutButton'
import { Link } from 'expo-router'
import { Text, View } from 'react-native'

export default function Page() {
  const { user } = useUser()

  return (
    <View>
      <SignedIn>
        <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
        <SignOutButton />
      </SignedIn>
      <SignedOut>
        <Link href="/(auth)/login">
          <Text>Sign in</Text>
        </Link>
        <Link href="/(auth)/login">
          <Text>Sign up</Text>
        </Link>
      </SignedOut>
    </View>
  )
}