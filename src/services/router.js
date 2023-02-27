import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { RegistrationScreen } from '../screens/auth/RegistrationScreen.jsx';
import { LoginScreen } from '../screens/auth/LoginScreen.jsx';

import { HomeScreen } from '../screens/posts/HomeScreen';

const AuthStack = createStackNavigator();

export const authResult = (isAuth) => {
  return isAuth ? (
    <HomeScreen />
  ) : (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Registration"
        component={RegistrationScreen}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
};
