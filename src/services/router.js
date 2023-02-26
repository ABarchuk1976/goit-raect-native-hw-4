import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { RegistrationScreen } from '../../src/screens/auth/RegistrationScreen/RegistrationScreen.jsx';
import { LoginScreen } from '../../src/screens/auth/LoginScreen/LoginScreen.jsx';
import { PostsScreen } from '../../src/screens/posts/PostsScreen.jsx';
import { CreatePostScreen } from '../../src/screens/posts/CreatePostScreen.jsx';
import { ProfileScreen } from '../../src/screens/posts/ProfileScreen.jsx';

const AuthStack = createStackNavigator();
const PostsTab = createBottomTabNavigator();

export const authResult = (isAuth) => {
  return isAuth ? (
    <PostsTab.Navigator>
      <PostsTab.Screen name="Posts" component={PostsScreen} />
      <PostsTab.Screen name="CreatePost" component={CreatePostScreen} />
      <PostsTab.Screen name="Profile" component={ProfileScreen} />
    </PostsTab.Navigator>
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
