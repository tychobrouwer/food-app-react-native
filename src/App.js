import React, { useReducer } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GlobalState, { reducer } from './components/global-state';

import LoadingScreen from './screens/splash';
import SignInScreen from './screens/sign-in';
import SignUpScreen from './screens/sign-up';
import HomeScreen from './screens/home';

const initialState = {
  credentials: null,
};

const Stack = createNativeStackNavigator();

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalState initialState={state} dispatch={dispatch}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
            animation: 'none',
          }}
        >
          <Stack.Screen
            name="Splash"
            component={LoadingScreen}
          />
          <Stack.Screen
            name="SignIn"
            component={SignInScreen}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalState>
  );
}
