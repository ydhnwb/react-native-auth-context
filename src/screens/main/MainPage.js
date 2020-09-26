import React from 'react';
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TodoFragment } from './fragments/TodoFragment';
import { SkillFragment } from './fragments/SkillFragment';
import { ProfileFragment } from './fragments/ProfileFragment';

const Tab = createBottomTabNavigator();

export function MainPage({ navigation }) {
    return (
        <Tab.Navigator
            initialRouteName="Todo"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Todo') {
                        iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
                    }else if(route.name === 'Skill'){
                        iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
                    }else{
                        iconName = focused ? 'people-circle' : 'people-circle';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}>

                <Tab.Screen name="Todo" component={TodoFragment}/>
                <Tab.Screen name="Skill" component={SkillFragment}/>
                <Tab.Screen name="Profile" component={ProfileFragment}/>
        </Tab.Navigator>
    )
}