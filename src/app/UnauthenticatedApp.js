import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginPage } from '../screens/login/LoginScreen';
import { RegisterPage } from '../screens/register/RegisterScreen';

const UnauthenticatedStack = createStackNavigator();

export function UnauthenticatedApp(){

    return (
        <UnauthenticatedStack.Navigator initialRouteName="Login" screenOptions={{
            headerShown: false
        }}>
            <UnauthenticatedStack.Screen name="Login" component={LoginPage}/>
            <UnauthenticatedStack.Screen name="Register" component={RegisterPage}/>
        </UnauthenticatedStack.Navigator>
    )
}