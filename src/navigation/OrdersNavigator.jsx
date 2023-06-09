import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OrdersScreen from "../screens/OrdersScreen";

const Stack = createNativeStackNavigator();

export default OrdersNavigator = () => {
    return (
        <Stack.Navigator 
            screenOptions={{
                headerShadowVisible: false,
                headerTitleStyle: {
                    fontWeight: "bold",
                },
            }}
        >
            <Stack.Screen 
                name="Orders" 
                component={OrdersScreen} 
                options={{title: "Ordenes"}} 
            />
        </Stack.Navigator>
    );
};