import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen";
import MenupScreen from "../screens/MenupScreen"



const Stack = createNativeStackNavigator();

export default function NavigationStack(){
    return(
        <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name = "Login" component={LoginScreen}/>
        <Stack.Screen name = "Menup" component={MenupScreen}/>
        
        </Stack.Navigator>
    );
}