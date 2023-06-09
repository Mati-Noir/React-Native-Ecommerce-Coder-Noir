import { StyleSheet, Text, View } from "react-native";
import OrdersNavigator from "./OrdersNavigator";
import CartNavigator from "./CartNavigator";
import Ionicons from "@expo/vector-icons/Ionicons";
import ShopNavigator from "./ShopNavigator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ReseñasNavigator from "./ReseñasNavigator";
import ListaReseñasNavigator from "./ListaReseñasNavigator";

const BottomTabs = createBottomTabNavigator();

export default BottomTabNavigator = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <BottomTabs.Screen
        name="ShopNavigator"
        component={ShopNavigator}
        options={{
          tabBarIcon: () => (
            <View>
              <Ionicons name="home" size={30} color="black" paddingTop={10} />
              <Text>Menu</Text>
            </View>
          ),
        }}
      />
      <BottomTabs.Screen
        name="Cart"
        component={CartNavigator}
        options={{
          tabBarIcon: () => (
            <View>
              <Ionicons name="cart" size={30} color="black" paddingTop={10} />
              <Text>Carrito</Text>
            </View>
          ),
        }}
      />

      <BottomTabs.Screen
        name="Orders"
        component={OrdersNavigator}
        options={{
          tabBarIcon: () => (
            <View>
              <Ionicons name="list" size={30} color="black" paddingTop={10} />
              <Text>Ordenes</Text>
            </View>
          ),
        }}
      />

      <BottomTabs.Screen
        name="Reseñas"
        component={ReseñasNavigator}
        options={{
          tabBarIcon: () => (
            <View>
              <Ionicons name="clipboard-outline" size={30} color="black" paddingTop={10} />
              <Text>Opinar</Text>
            </View>
          ),
        }}
      />

      <BottomTabs.Screen
        name="ListaReseñas"
        component={ListaReseñasNavigator}
          options={{
            tabBarIcon: () => (
              <View>
                <Ionicons name="list-circle-outline" size={30} color="black" paddingTop={10} />
                <Text>Reseñas</Text>
              </View>
            ),
          }}
        />

    </BottomTabs.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#FED48F",
    paddingTop: 5,
    height: 83,
    position: "absolute",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    borderTopWidth: 1,
    borderTopColor: "black",
  },
});