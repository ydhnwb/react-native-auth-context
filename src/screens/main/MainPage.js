import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AboutPage }  from '../about/AboutPage';
import { PortfolioPage } from './PortfolioPage';

const Drawer = createDrawerNavigator();


export function MainPage(){
    return (
        <Drawer.Navigator initialRouteName="Portfolio">
            <Drawer.Screen name="Portfolio" component={PortfolioPage} />
            <Drawer.Screen name="About" component={AboutPage} />
        </Drawer.Navigator>
    )
}