import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import React, { useState } from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoginScreen } from './pages/login_screen';
import { HomeScreen } from './pages/home_screen';
import { SignupScreen } from './pages/signup_screen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={HomeScreen}
          options={ defaultScreenOpt }
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={ defaultScreenOpt }
        />
        <Stack.Screen 
          name="Signup"
          component={SignupScreen}
          options={ defaultScreenOpt }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const defaultScreenOpt = {
  headerShown: false,
  animation: 'none',
}