import React from 'react';
import { View, Text, SafeAreaView, ImageBackground, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useLayoutEffect } from 'react';

export default function MenuScreen(props) {
    const { navigation } = props;

    useLayoutEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [navigation]);

    const goToMenup = () => navigation.navigate("Menup");

    return (
        <ImageBackground source={require('../images/menu.png')} style={styles.background}>
            <SafeAreaView style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Menu</Text>
                </View>
                <ScrollView contentContainerStyle={styles.menuContainer}>
                    <View style={styles.menuSpacing}>
                        <Text style={styles.pizzaText}>EXTRAVAGANZA...............................300</Text>
                        <Text style={styles.pizzaText}>DELUXE............................................299</Text>
                        <Text style={styles.pizzaText}>CHICKEN HAWAIANA.........................270</Text>
                        <Text style={styles.pizzaText}>HONOLULU.......................................250</Text>
                        <Text style={styles.pizzaText}>TRIPLE PEPPERONI...........................260</Text>
                        <Text style={styles.pizzaText}>MEXICANA.......................................240</Text>
                    </View>
                </ScrollView>
                <TouchableOpacity style={styles.exitButton} onPress={goToMenup}>
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
        alignItems: 'center',
        padding: 20,
    },
    titleContainer: {
        position: 'absolute',
        top: 50,
        alignSelf: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
    },
    menuContainer: {
        marginTop: 100, // Aumenta el espacio entre el título y el menú
        alignItems: 'center',
    },
    menuSpacing: {
        marginTop: 20, // Añade espacio antes del primer elemento del menú
    },
    pizzaText: {
        fontSize: 20,
        fontWeight: '300',
        color: '#fff',
        marginBottom: 10,
        fontWeight: "bold",
        letterSpacing: 1.2,
        textTransform: 'uppercase',
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