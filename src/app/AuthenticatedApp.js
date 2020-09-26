import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MainPage } from '../screens/main/MainPage';
import { AboutPage } from '../screens/about/AboutPage';

const AuthenticatedStack = createStackNavigator();

export function AuthenticatedApp(){
    return(
        <AuthenticatedStack.Navigator initialRouteName="Main" screenOptions={{
            headerShown: false
        }}>
            <AuthenticatedStack.Screen name="Main" component={MainPage}/>
            <AuthenticatedStack.Screen name="About" component={AboutPage}/>
        </AuthenticatedStack.Navigator>
    )
}