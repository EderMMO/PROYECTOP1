import React, { useState, useContext } from 'react'; 
import { View, Text, SafeAreaView, TextInput, Alert, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { OrdersContext } from '../context/OrdersContext';
import { useLayoutEffect } from 'react';

export default function OrdersScreen({ navigation }) {
    useLayoutEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [navigation]);
    const { orders, setOrders } = useContext(OrdersContext);
    const [type, setType] = useState("EXTRAVAGANZA");
    const [size, setSize] = useState("");
    const [amount, setAmount] = useState("");

    const pizzaOptions = ["EXTRAVAGANZA", "DELUXE", "CHICKEN HAWAIANA", "HONOLULU", "TRIPLE PEPPERONI", "MEXICAN"];
    
    const goToMenup = () => navigation.navigate("Menup");
    
    const saveOrder = () => {
        if (!size.trim() || !amount.trim()) {
            Alert.alert("Error", "All fields are required.");
            return;
        }
        
        setOrders([...orders, { type, size, amount }]);
        setSize("");
        setAmount("");
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
                <TouchableOpacity style={styles.button} onPress={saveOrder}>
                    <Text style={styles.buttonText}>Save Order</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonSecondary} onPress={goToMenup}>
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