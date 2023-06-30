import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewPlaceScreen from "../screens/NewPlaceScreen"

const Stack = createNativeStackNavigator();
export default ReseñasNavigator = () => {
    return (
        <Stack.Navigator 
            screenOptions={{
                headerShadowVisible: false,
                headerTitleStyle: {
                    fontWeight: "bold",
                },
            }}
        >
            <Stack.Screen name="Reseñas" component={NewPlaceScreen} />
        </Stack.Navigator>
    );
};