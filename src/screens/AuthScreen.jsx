import {
  Alert,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useCallback, useEffect, useReducer, useState } from "react";

import Input from "../components/Input";
import burger from "../assets/burger.jpg";
import { signUp } from "../store/actions/auth.action";
import { useDispatch } from "react-redux";

const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";

const formReducer = (state, action) => {
  console.log(action);
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      inputValues: updatedValues,
      inputValidities: updatedValidities,
      formIsValid: updatedFormIsValid,
    };
  }
  return state;
};

const AuthScreen = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  useEffect(() => {
    if (error) {
      Alert.alert("A ocurrido un error", error, [{ text: "Ok" }]);
    }
  }, [error]);

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: "",
      password: "",
    },
    inputValidities: {
      email: false,
      password: false,
    },
    formIsValid: false,
  });

  const handleSignUp = () => {
    //dispatch(signup(email, password))
    if (formState.formIsValid) {
      dispatch(
        signUp(formState.inputValues.email, formState.inputValues.password)
      );
    } else {
      Alert.alert("Datos de usuario incorrectos", "Por favor, ingrese un mail y contraseña válidos", [
        { text: "ok" },
      ]);
    }
  };

  const onInputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      console.log(inputIdentifier, inputValue, inputValidity);
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
    },
    [dispatchFormState]
  );

  return (
    <KeyboardAvoidingView
      style={styles.mainContainer}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={50}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Image style={styles.image} source={burger} />
          <View style={styles.inputContainer}>
            <Input
              id="email"
              label="Email"
              keyboardType="email-address"
              required
              email
              autoCapitalize="none"
              errorText="Por favor ingrese un email valido"
              onInputChange={onInputChangeHandler}
              initialValue=""
            />
            <Input
              id="password"
              label="Contraseña"
              keyboardType="default"
              required
              password
              secureTextEntry
              autoCapitalize="none"
              errorText="Por favor ingrese una contrasena valida"
              onInputChange={onInputChangeHandler}
              initialValue=""
            />
          </View>
          <View style={styles.footer}>
            <TouchableOpacity
              style={styles.registerButton}
              onPress={handleSignUp}
            >
              <Text style={styles.buttonText}>Registrarse</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#aliceblue",
  },
  container: {
    paddingTop: 100,
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "40%",
  },
  inputContainer: {
    width: "90%",
  },
  registerButton: {
    backgroundColor: "#F9A924",
    width: "100%",
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    marginTop: 42,
    width: "90%",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});