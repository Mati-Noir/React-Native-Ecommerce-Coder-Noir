import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PlaceListScreen from '../screens/PlaceListScreen';
import MapScreen from "../screens/MapScreen";
import PlaceDetailScreen from "../screens/PlaceDetailScreen";

const Stack = createNativeStackNavigator();
export default ListaReseñasNavigator = () => {
    return (
        <Stack.Navigator 
            screenOptions={{
                headerShadowVisible: false,
                headerTitleStyle: {
                    fontWeight: "bold",
                },
            }}
        >
            <Stack.Screen name="Reseñas" component={PlaceListScreen} />
            <Stack.Screen name="Detalle" component={PlaceDetailScreen} options={{ title: "Detalles" }} />
            <Stack.Screen name="Map" component={MapScreen} options={{ title: "Mapa" }} />
        </Stack.Navigator>
    );
};