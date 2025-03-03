import React from 'react';
import { View, Text, Button, SafeAreaView, StyleSheet, ImageBackground } from 'react-native';
import { useLayoutEffect } from 'react';

export default function UsScreen(props) {
    const { navigation } = props;

    useLayoutEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [navigation]);

    const goToLogin = () => {
        navigation.navigate("Login");
    }

    return (
        <ImageBackground 
            source={require('../images/US.jpeg')} 
            style={styles.background}
        >
            <SafeAreaView style={styles.container}>
            
                <Text style={styles.title}>US</Text>

                <Text style={styles.subtitle}>About Us</Text>
                <Text style={styles.text}>
                    At Oscar's Pizza, we are passionate about bringing the authentic taste of traditional pizza to your table. 
                    With years of experience and a love for quality ingredients, we have created a place where flavors come to life.
                </Text>

                <Text style={styles.subtitle}>Our Mission</Text>
                <Text style={styles.text}>
                    Our mission is simple: to serve delicious, handcrafted pizzas made with the freshest ingredients. 
                    Every pizza is prepared with love, from our homemade dough to our rich, flavorful sauces and premium toppings.
                </Text>

                <Text style={styles.subtitle}>What Makes Us Special?</Text>
                <View style={styles.bulletContainer}>
                    <Text style={styles.bulletPoint}>• <Text style={styles.boldText}>Authentic Recipes</Text> – We honor traditional pizza-making techniques while adding our own creative touch.</Text>
                    <Text style={styles.bulletPoint}>• <Text style={styles.boldText}>Fresh Ingredients</Text> – We use only the finest, high-quality ingredients to ensure every bite is unforgettable.</Text>
                    <Text style={styles.bulletPoint}>• <Text style={styles.boldText}>Passionate Team</Text> – Our chefs and staff are dedicated to providing you with an exceptional dining experience.</Text>
                    <Text style={styles.bulletPoint}>• <Text style={styles.boldText}>Warm Atmosphere</Text> – Whether you're dining in, taking out, or ordering for delivery, we make sure you feel at home.</Text>
                </View>

                <View style={styles.exitButton}>
                    <Button onPress={goToLogin} title="Exit" color="red" />
                </View>
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
        padding: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#fff',
    },
    subtitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        color: '#fff',
    },
    text: {
        fontSize: 16,
        lineHeight: 24,
        color: '#ddd',
        marginBottom: 10,
    },
    bulletContainer: {
        marginTop: 10,
        marginBottom: 20,
    },
    bulletPoint: {
        fontSize: 16,
        lineHeight: 24,
        color: '#ddd',
        marginBottom: 5,
    },
    boldText: {
        fontWeight: 'bold',
        color: '#fff',
    },
    exitButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
});
