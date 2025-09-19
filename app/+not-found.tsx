import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router';

export default function NotFound() {
  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 12 }}>Not Found</Text>
      <Link href='/'>Go home</Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})