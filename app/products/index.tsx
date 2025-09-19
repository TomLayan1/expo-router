import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function index() {
  return (
    <View style={styles.container}>
      <Link style={{ marginBottom: 12 }} href="/products/1">Product 1</Link>
      <Link style={{ marginBottom: 12 }} href="/products/2">Product 2</Link>
      <Link style={{ marginBottom: 12 }} href="/products/3">Product 3</Link>

      <Link style={{ marginBottom: 12 }} href="/products/best-seller/playstation-5">PlayStation (Best seller)</Link>
      <Link style={{ marginBottom: 12 }} href="/products/deals/black-friday/playstation-5">PlayStation (Deal)</Link>
      <Link style={{ marginBottom: 12 }} href="/products/search/playstation-5">PlayStation (Search)</Link>
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