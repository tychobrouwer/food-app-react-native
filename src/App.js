import React, { useReducer } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GlobalState, { reducer } from "./components/global-state";

import { LoginScreen } from './screens/login';
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
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
            animation: 'none',
          }}
        >
          <Stack.Screen
            name='Login'
            component={LoginScreen}
          />
          <Stack.Screen 
            name='Home'
            component={HomeScreen}
          />
          <Stack.Screen 
            name='Signup'
            component={SignupScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalState>
  );
}