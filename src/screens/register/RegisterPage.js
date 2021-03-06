import React, { useContext, useState } from 'react';
import {
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
    Dimensions,
    ActivityIndicator,
    Alert
} from "react-native";
import axios from 'axios';
import AsyncStorage from "@react-native-community/async-storage";

const { width: WIDTH } = Dimensions.get("window")

import image_bg from './../../assets/image_bg.jpg';
import { Context } from '../../stores/Store';
import { DefaultHeader } from '../../utils/Utils';


export function RegisterPage(){
    const { state, dispatch } = useContext(Context);
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const validate = () => {
        if (email === "" || password === "" || name === "") {
            showInfoAlert("Info", "Please fill all form first.")
            return false
        }
        return true
    }

    const setToken = async (token) => {
        await AsyncStorage.setItem('RN_TOKEN', token)
    };

    const doRegister = async () => {
        try {
            if (validate()) {
                setIsLoading(true)
                const payload = {
                    name: name,
                    email: email,
                    password: password
                }
                let status_code;
                const response = await axios.post("https://be-kickin.herokuapp.com/api/v1/user/register", payload, { headers: DefaultHeader })
                    .then((res) => {
                        status_code = res.status;
                        return res.data;
                    })
                    .catch(err => {
                        status_code = err.response.status;
                    })

                setIsLoading(false)
                if (status_code === 201) {
                    const token = response.data.token
                    await setToken(token)
                    dispatch({ type: 'LOGIN', data: { token } });
                } else {
                    showInfoAlert("Failed", "Login failed. Please check again your credentials.")
                }
            }
        } catch (e) {
            showInfoAlert("Error", "Exception occured : " + e.message);
            console.log(e)
        }
    }

    const showInfoAlert = (title, message) =>
        Alert.alert(title, message,
        [
            { text: "Ok", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: true }
    );


    return (
        <ImageBackground source={image_bg} style={styles.backgroundContainer}>
            <TextInput
                onChangeText={e => setName(e)}
                style={styles.input}
                placeholder="Fullname" />
            <TextInput
                onChangeText={e => setEmail(e)}
                style={styles.input}
                placeholder="Email" />
            <TextInput
                onChangeText={e => setPassword(e)}
                style={styles.input}
                secureTextEntry={true}
                placeholder="Password" />

            <TouchableOpacity
                style={styles.SubmitButtonStyle}
                activeOpacity={.5}
                onPress={() => doRegister()}>
                {
                    isLoading ?
                        <ActivityIndicator color="#ffffff" size="small" />
                        :
                        <Text style={styles.TextStyle}> Register </Text>
                }

            </TouchableOpacity>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#f5fcff"
    },
    logo: {
        width: 120,
        height: 120
    },
    logoContainer: {
        alignItems: "center"
    },
    logoText: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold"
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10
    },
    instruction: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5
    },
    input: {
        width: WIDTH - 55,
        height: 45,
        marginVertical: 8,
        borderRadius: 25,
        fontSize: 16,
        paddingStart: 16,
        backgroundColor: "rgba(0, 0, 0, 0.35)",
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        marginHorizontal: 25
    },
    inputIcon: {
        position: "absolute",
        top: 8,
        left: 37
    },
    inputContainer: {
        flex: 1,
        flexWrap: "wrap",
        marginTop: 16
    },
    buttonLogin: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        fontSize: 16,
        justifyContent: "center",
        marginTop: 16

    },
    buttontext: {
        color: "#fff",
        fontSize: 20,
        textAlign: "center"
    },
    SubmitButtonStyle: {

        marginTop: 10,
        paddingTop: 15,
        paddingBottom: 15,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: '#00BCD4',
        borderRadius: 28,
        borderWidth: 1,
        borderColor: '#fff'
    },

    TextStyle: {
        color: '#fff',
        textAlign: 'center',
    },
    titlePage: {
        fontSize: 28,
        color: "#fff",
        alignSelf: "center"
    }

});