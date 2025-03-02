import React, { useState } from 'react'; 
import { View, Text, SafeAreaView, TextInput, Alert, TouchableOpacity, Image, ImageBackground, BackHandler } from 'react-native';
import { useLayoutEffect } from 'react';

export default function LoginScreen(props) {
    const { navigation } = props;
    useLayoutEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [navigation]);
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const user1 = 'imissyou'
    const password1 = 'forever'
    const user2 = 'admin'
    const password2 = 'root'
    const user3 = 'rufino'
    const password3 = '123'

    const goToMenup = () => {
        if (user === user1 && password === password1 || user === user2 && password === password2 || user === user3 && password === password3) {
            navigation.navigate("Menup");
        } else {
            Alert.alert("Error", "Incorrect username and/or password");
        }
    };
    
    
    const exitApp = () => {
        Alert.alert("Exit", "Do you want to exit the application?", [
            { text: "Cancel", style: "cancel" },
            { text: "Exit", onPress: () => BackHandler.exitApp() }
        ]);
    };

    return (
        <ImageBackground 
            source={require('../images/fondo.png')}
            style={{ flex: 1, padding: 20, justifyContent: 'flex-start', alignItems: 'center' }}
        >
            <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#fff', marginTop: 40 }}>
                Welcome To My Pizzeria
            </Text>

            <SafeAreaView style={{ alignItems: 'center', width: '100%', flex: 1 }}>
                <Image 
                    source={require('../images/logo.png')}
                    style={{ width: 150, height: 150, marginTop: 20, marginBottom: 20 }}
                    resizeMode="contain"
                />

                <View style={{ flex: 1, justifyContent: 'flex-center', width: '100%' }}>
                    <TextInput
                        placeholder="User"
                        placeholderTextColor="#000"
                        value={user}
                        onChangeText={setUser}
                        style={{ width: '100%', borderWidth: 1, borderColor: '#fff', backgroundColor: '#fff', padding: 10, marginVertical: 10, borderRadius: 5 }}
                    />
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor="#000"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                        style={{ width: '100%', borderWidth: 1, borderColor: '#fff', backgroundColor: '#fff', padding: 10, marginVertical: 10, borderRadius: 5 }}
                    />

                    <TouchableOpacity 
                        onPress={goToMenup} 
                        style={{ backgroundColor: '#007bff', padding: 15, borderRadius: 5, width: '100%', alignItems: 'center', marginVertical: 10 }}
                    >
                        <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Login</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>

            <TouchableOpacity 
                onPress={exitApp} 
                style={{
                    backgroundColor: 'red',
                    padding: 10,
                    borderRadius: 5,
                    position: 'absolute',
                    bottom: 20,
                    right: 20,
                    alignItems: 'center',
                }}
            >
                <Text style={{ color: '#fff', fontSize: 14, fontWeight: 'bold' }}>Exit</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
}

