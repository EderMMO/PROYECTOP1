import React, { useState, useContext, useLayoutEffect } from 'react';
import { View, Text, SafeAreaView, TextInput, Alert, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { OrdersContext } from '../context/OrdersContext';

export default function OrdersScreen({ navigation }) {
    useLayoutEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [navigation]);
    
    const { orders, setOrders } = useContext(OrdersContext);
    const [type, setType] = useState("EXTRAVAGANZA");
    const [size, setSize] = useState("");
    const [amount, setAmount] = useState("1");
    
    const pizzaPrices = {
        "EXTRAVAGANZA": 300,
        "DELUXE": 299,
        "CHICKEN HAWAIANA": 270,
        "HONOLULU": 250,
        "TRIPLE PEPPERONI": 260,
        "MEXICAN": 240
    };
    
    const pizzaOptions = Object.keys(pizzaPrices);
    
    const totalPrice = (pizzaPrices[type] * (parseInt(amount) || 0)).toFixed(2);
    
    const goToLogin= () => navigation.replace("Login");
    
    const saveOrder = () => {
        if (!size.trim() || !amount.trim() || parseInt(amount) <= 0) {
            Alert.alert("Error", "All fields are required and amount must be at least 1.");
            return;
        }
        
        setOrders([...orders, { type, size, amount, totalPrice }]);
        setSize("");
        setAmount("1");
        navigation.navigate("Order");
    };
    
    return (
        <ImageBackground source={require('../images/Orders.jpeg')} style={styles.background}>
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>Add Order</Text>
                <Picker selectedValue={type} onValueChange={setType} style={styles.picker}>
                    {pizzaOptions.map((pizza, index) => (
                        <Picker.Item key={index} label={pizza} value={pizza} />
                    ))}
                </Picker>
                <TextInput 
                    placeholder="Size" 
                    value={size} 
                    onChangeText={setSize} 
                    style={styles.input} 
                />
                <TextInput 
                    placeholder="Quantity" 
                    value={amount} 
                    onChangeText={setAmount} 
                    keyboardType="numeric" 
                    style={styles.input} 
                />
                <Text style={styles.priceText}>Total Price: ${totalPrice}</Text>
                <TouchableOpacity style={styles.button} onPress={saveOrder}>
                    <Text style={styles.buttonText}>Save Order</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonSecondary} onPress={goToLogin}>
                    <Text style={styles.buttonText}>Exit</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#fff',
    },
    picker: {
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 10,
        marginBottom: 10,
    },
    input: {
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
    },
    priceText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#ff5733',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        width: '100%',
        marginBottom: 10,
    },
    buttonSecondary: {
        backgroundColor: '#555',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        width: '100%',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    }
});
