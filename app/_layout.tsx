import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function RootLayout() {
  return (
    <View style={styles.container}>
      <Stack />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})