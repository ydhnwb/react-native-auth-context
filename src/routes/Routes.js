import React, { useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Context } from './../stores/Store';
import { UnauthenticatedApp } from '../app/UnauthenticatedApp';
import { AuthenticatedApp } from '../app/AuthenticatedApp';
import AsyncStorage from "@react-native-community/async-storage";


const RootNavigationStack = createStackNavigator();

const RootStackScreen = () => {
    const { state, dispatch } = useContext(Context);

    const checkIsLoggedIn = async () => {
        try {
            const currentToken = await AsyncStorage.getItem('RN_TOKEN')
            .then(v => {
              console.log(v)
              return v
            })
            .catch(err => {
              console.log(err)
              return null
            })
            dispatch({ type: 'CHECK', data: { currentToken } });
          } catch(e) {
              console.log(e)
          }
    }

    useEffect(() => {
        checkIsLoggedIn()
    }, [])

    return (
        !state.authToken ? <UnauthenticatedApp/> : <AuthenticatedApp/>
    );
};

const NavigationContainerStack = () => (
    <NavigationContainer>
        <RootStackScreen />
    </NavigationContainer>
);

export default NavigationContainerStack;