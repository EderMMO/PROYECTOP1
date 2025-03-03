import React, { useContext } from 'react';
import { View, Text, SafeAreaView, Button, FlatList, StyleSheet, ImageBackground } from 'react-native';
import { OrdersContext } from '../context/OrdersContext'; 
import { useLayoutEffect } from 'react';

export default function OrderScreen({ navigation }) {
    const { orders } = useContext(OrdersContext);

    useLayoutEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [navigation]);

    const goToMenup = () => {
        navigation.navigate("Menup");
    }

    return (
        <ImageBackground
            source={require('../images/Order.jpg')} 
            style={styles.background}
        >
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>Order</Text>

                {orders.length > 0 ? (
                    <FlatList
                        data={orders}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.orderItem}>
                                <Text style={styles.text}>🍕 Type: {item.type}</Text>
                                <Text style={styles.text}>📏 Size: {item.size}</Text>
                                <Text style={styles.text}>🔢 Quantity: {item.amount}</Text>
                            </View>
                        )}
                    />
                ) : (
                    <Text style={styles.text}>No orders yet</Text>
                )}

                
            </SafeAreaView>

            <View style={styles.exitButtonContainer}>
                <Button
                    onPress={goToMenup}
                    title="Exit"
                    color="red" 
                />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        width: '100%',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    orderItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    text: {
        fontSize: 16,
        color: '#fff',
    },
    exitButtonContainer: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        width: '15%', 
    }
});
