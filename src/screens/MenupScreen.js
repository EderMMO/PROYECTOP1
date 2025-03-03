import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ImageBackground } from 'react-native';
import { useLayoutEffect } from 'react';

export default function MenupScreen(props) {
    const { navigation } = props;

    useLayoutEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [navigation]);

    const goToOrders = () => {
        navigation.replace("Orders");
    };
    const goToCustomers = () => {
        navigation.replace("Customer");
    };
    const goToLogin = () => {
        navigation.replace("Login");
    };
    const goToUs = () => {
        navigation.replace("US");
    };

    return (
        <ImageBackground 
            source={require('../images/fondo2.jpeg')} // Asegúrate de que la ruta sea correcta
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            {/* Título en la parte superior */}
            <Text style={{
                fontSize: 30,
                fontWeight: 'bold',
                color: '#fff',
                position: 'absolute',
                top: 40, // Para ponerlo justo abajo del borde superior
                textAlign: 'center',
                width: '100%',
            }}>
                Main Menu
            </Text>

            <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {/* Botón Employees */}
                <TouchableOpacity 
                    onPress={goToOrders} 
                    style={{ backgroundColor: '#4A90E2', padding: 15, borderRadius: 10, width: '60%', alignItems: 'center', marginVertical: 10 }}
                >
                    <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>Employees</Text>
                </TouchableOpacity>

                {/* Botón Customers */}
                <TouchableOpacity 
                    onPress={goToCustomers} 
                    style={{ backgroundColor: '#50C878', padding: 15, borderRadius: 10, width: '60%', alignItems: 'center', marginVertical: 10 }}
                >
                    <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>Customers</Text>
                </TouchableOpacity>

                {/* Botón Customers */}
                <TouchableOpacity 
                    onPress={goToUs} 
                    style={{ backgroundColor: '#000', padding: 15, borderRadius: 10, width: '60%', alignItems: 'center', marginVertical: 10 }}
                >
                    <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>US</Text>
                </TouchableOpacity>

                {/* Botón Exit */}
                <TouchableOpacity 
                    onPress={goToLogin} 
                    style={{
                        backgroundColor: 'red',
                        padding: 10,
                        borderRadius: 5,
                        position: 'absolute',
                        bottom: 20,
                        right: -120,
                        alignItems: 'center',
                    }}
                >
                    <Text style={{ color: '#fff', fontSize: 14, fontWeight: 'bold' }}>Exit</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </ImageBackground>
    );
}
