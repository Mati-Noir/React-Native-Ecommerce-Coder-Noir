import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import CategoriesScreen from '../screen/CategoriesScreen'
import { COLORS } from '../constants/colors'
import DetailsScreen from '../screen/DetailsScreen'
import ProductsScreen from '../screen/ProductsScreen'

const ShopNavigator = () => {

  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: COLORS.cuaternary,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}>
        <Stack.Screen 
          name="Home" 
          component={CategoriesScreen} 
          options={{
            title: 'Categories',
          }}/>
        <Stack.Screen name="Products" component={ProductsScreen} options={({route}) => ({
          title: route.params.title,
        })}/>
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default ShopNavigator

const styles = StyleSheet.create({})