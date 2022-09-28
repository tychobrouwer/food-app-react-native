import React, { useReducer } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import reducer component
import GlobalState, { reducer } from './components/global-state';

// imports for the screens
import LoadingScreen from './screens/splash';
import SignInScreen from './screens/sign-in';
import SignUpScreen from './screens/sign-up';
import HomeScreen from './screens/home';
import RecipesScreen from './screens/recipes';
import SettingsScreen from './screens/settings';
import GroceryListScreen from './screens/grocery-list';
import AddProductScreen from './screens/add-product';

// initial values for locally stored values
const initialState = {
  credentials: null,
};

// stack for navigating between screens
const Stack = createNativeStackNavigator();

// main aoo function
export default function App() {
  // setting up th reducer for accessing the locally stored values
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalState initialState={state} dispatch={dispatch}>
      <NavigationContainer>
        <Stack.Navigator
          // change 'initialRouteName' to change the starting screen
          // for final app this should be 'Splash'
          initialRouteName="AddProduct"
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
          <Stack.Screen
            name="GroceryList"
            component={GroceryListScreen}
          />
          <Stack.Screen
            name="Recipes"
            component={RecipesScreen}
          />
          <Stack.Screen
            name="AddProduct"
            component={AddProductScreen}*/
          />
          <Stack.Screen
            name="Settings"
            component={SettingsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalState>
  );
}
