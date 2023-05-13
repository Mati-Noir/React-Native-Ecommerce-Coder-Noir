import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native'

const CategoryBreadScreen = ({ navigation }) => {
  return (
    <View>
      <Text>CategoryBreadScreen</Text>
      <Button title="Navegar a Detail" onPress={() => navigation.navigate("Detail")} />
    </View>
  )
}

export default CategoryBreadScreen

const styles = StyleSheet.create({})