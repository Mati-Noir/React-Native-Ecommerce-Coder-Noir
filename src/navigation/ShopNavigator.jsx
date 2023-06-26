import { COLORS } from "../constants/colors";
import CategoriesScreen from "../screens/CategoriesScreen";
import DetailsScreen from "../screens/DetailsScreen";
import ProductsScreen from "../screens/ProductsScreen";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const ShopNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.header,
        },
        headerTitleStyle: {
          fontWeight: "bold",
          color: "black",
          fontSize: 22,
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={CategoriesScreen}
        options={{
          title: "Bienvenido, que sale hoy?",
        }}
      />
      <Stack.Screen
        name="Products"
        component={ProductsScreen}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
    </Stack.Navigator>
  );
};

export default ShopNavigator;