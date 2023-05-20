import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DetailsScreen = ({ route }) => {
  const bread = route.params.product;
  return (
    <View>
      <Text>{bread.name}</Text>
      <Text>{bread.description}</Text>
      <Text>${bread.price}</Text>
    </View>
  )
}

export default DetailsScreen;

const styles = StyleSheet.create({})