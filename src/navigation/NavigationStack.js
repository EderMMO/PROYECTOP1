import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import MenupScreen from "../screens/MenupScreen"
import OrdersScreen from "../screens/OrdersScreen";
import OrderScreen from "../screens/OrderScreen";
import CustomerScreen from "../screens/CustomerScreen";
import MenuScreen from "../screens/MenuScreen"
import UsScreen from "../screens/UsScreen"


const Stack = createNativeStackNavigator();

export default function NavigationStack(){
    return(
        <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name = "US" component={UsScreen}/>
        <Stack.Screen name = "Login" component={LoginScreen}/>
        <Stack.Screen name = "Menup" component={MenupScreen}/>
        <Stack.Screen name = "Orders" component={OrdersScreen}/>
        <Stack.Screen name = "Order" component={OrderScreen}/>
        <Stack.Screen name = "Customer" component={CustomerScreen}/>
        <Stack.Screen name = "Menu" component={MenuScreen}/>
        </Stack.Navigator>
    );
}