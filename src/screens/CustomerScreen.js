import React from 'react'; 
import { View, Text, SafeAreaView, Button, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { useLayoutEffect } from 'react';

export default function OrderScreen(props) {
    const { navigation } = props;

    useLayoutEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [navigation]);

    const goToMenu = () => navigation.navigate("Menu");
    const goToOrder = () => navigation.navigate("Order");
    const goToLogin = () => navigation.navigate("Login");

    return (
        <ImageBackground source={require('../images/customer.jpeg')} style={styles.background}>
            <SafeAreaView style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Customer</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={goToMenu}>
                    <Text style={styles.buttonText}>Menu</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={goToOrder}>
                    <Text style={styles.buttonText}>Order</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.exitButton} onPress={goToLogin}>
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
    titleContainer: {
        position: 'absolute',
        top: 50,
        alignSelf: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    button: {
        backgroundColor: '#ff5733',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        width: '100%',
        marginBottom: 10,
    },
    exitButton: {
        backgroundColor: 'red',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    }
});