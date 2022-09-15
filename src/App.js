import React, { useReducer } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GlobalState, { reducer } from "./components/global-state";

import { SplashScreen } from './screens/splash';
import { LoginScreen } from './screens/signin';
import { HomeScreen } from './screens/home';
import { SignupScreen } from './screens/signup';

const initialState = {
  credentials: null
};

const Stack = createNativeStackNavigator();

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalState initialState={state} dispatch={dispatch}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Splash'
          screenOptions={{
            headerShown: false,
            animation: 'none',
          }}
        >
          <Stack.Screen
            name='Splash'
            component={SplashScreen}
          />
          <Stack.Screen
            name='SignIn'
            component={LoginScreen}
          />
          <Stack.Screen 
            name='Home'
            component={HomeScreen}
          />
          <Stack.Screen 
            name='SignUp'
            component={SignupScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalState>
  );
}