import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native'

const ProductsScreen = ({ navigation, route }) => {
  return (
    <View>
      <Text>CategoryBreadScreen</Text>
      <Text>{route.params.name}
      </Text>
      <Button title="Navegar a Detail" onPress={() => navigation.navigate("Details")} />
    </View>
  )
}

export default ProductsScreen;

const styles = StyleSheet.create({})