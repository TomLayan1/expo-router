import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native'

export default function ProductPage() {
  const { id } = useLocalSearchParams();
  const numericId = parseInt(id as string, 10);
  console.log(typeof id);
  console.log(numericId)

  return (
    <View style={styles.container}>
      <Text>Product id is: {id}</Text>
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