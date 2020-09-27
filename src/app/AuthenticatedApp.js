import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MainPage } from '../screens/main/MainPage';
import { DetailTodoPage } from '../screens/detail_todo/DetailTodoPage';

const AuthenticatedStack = createStackNavigator();

export function AuthenticatedApp(){
    return(
        <AuthenticatedStack.Navigator initialRouteName="Main">
            <AuthenticatedStack.Screen name="Main" component={MainPage} options={{
                headerShown: false
            }}/>
            <AuthenticatedStack.Screen name="Detail" component={DetailTodoPage} options={({ route }) => ({ title: route.params.data.title })}/>
        </AuthenticatedStack.Navigator>
    )
}