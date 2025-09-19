import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native'

export default function CatchAllProductDetails() {
  const { rest } = useLocalSearchParams<{rest: string[]}>();

  return (
    <View style={styles.container}>
      <Text>Catch all product details</Text>
      <Text>Product id is: {rest.join("/")}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});