// src/Navigation.js

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegistrationForm from './RegistrationForm';
import DashboardScreen from './DashboardScreen';

const Stack = createStackNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="RegistrationForm">
                <Stack.Screen name="RegistrationForm" component={RegistrationForm} options={{ title: 'Form Pendaftaran' }} />
                <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ title: 'Dashboard' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;
