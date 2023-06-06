import { Button, KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../store/actions/auth.action';

const AuthScreen = () => {

    const dispatch = useDispatch();
    const [email, setEmail] = useState("test@test.com");
    const [password, setPassword] = useState("pass123456");
    
    const handleSignUp = () => {
        dispatch(signUp(email, password));
    };
  return (
    <KeyboardAvoidingView style={styles.mainContainer} behavior='padding' keyboardVerticalOffset={50}>
        <View style={styles.container}>
            <Text style={styles.title}>Hamburgueseria</Text>
            <Text style={styles.title}>Crear usuario</Text>
        <View>
            <TextInput style={styles.input} />
            <TextInput style={styles.input} />
        </View>
            <View style={styles.footer}>
                <Button title="Iniciar Sesion" onPress={handleSignUp} />
                <Button title="Registrarse" onPress={() => console.log("first")} />
            </View>
        </View>
    </KeyboardAvoidingView>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "grey",
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        marginBottom: 10,
    },
    container: {
        width: "80%",
        maxWidth: 400,
        backgroundColor: "white",
        height: "50%",
        padding: 12,
    },
    footer: {
        marginTop: 42,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
})