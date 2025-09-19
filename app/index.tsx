import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

export default function Home() {
  
  return (
    <View style={styles.container}>
      <Link href='/products'>Products</Link>
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