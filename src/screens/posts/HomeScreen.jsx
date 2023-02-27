import React, { useContext } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import { PostsScreen } from './PostsScreen';
import { CreatePostScreen } from './CreatePostScreen.jsx';
import { ProfileScreen } from './ProfileScreen.jsx';
import { AuthContext } from '../../services/context';

const PostsTab = createBottomTabNavigator();

export const HomeScreen = () => {
  const setIsAuth = useContext(AuthContext);
  const handlerLogOut = () => {
    setIsAuth(false);
  };

  return (
    <PostsTab.Navigator initialRouteName="Posts">
      <PostsTab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          title: 'Posts',
          headerTitleAlign: 'center',
          headerStyle: {
            height: 88,
            backgroundColor: '#ffffff',
          },
          headerTitleStyle: {
            fontFamily: 'roboto-regular',
            fontWeight: '500',
            fontSize: 17,
          },
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size, color }) => {
            return (
              <AntDesign
                name="appstore-o"
                size={24}
                color="#212121"
                style={{ marginTop: 9 }}
              />
            );
          },
          headerRight: () => (
            <Feather
              name="log-out"
              size={24}
              color="#bdbdbd"
              style={{ marginRight: 10 }}
              onPress={() => setIsAuth(false)}
            />
          ),
        }}
      />
      <PostsTab.Screen
        name="CreatePost"
        component={CreatePostScreen}
        options={({ navigation }) => ({
          title: 'Create post',
          headerTitleAlign: 'center',
          headerStyle: {
            height: 88,
            backgroundColor: '#ffffff',
          },
          headerTitleStyle: {
            fontFamily: 'roboto-regular',
            fontWeight: '500',
            fontSize: 17,
          },
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size, color }) => {
            return <AntDesign name="plus" size={13} color="#ffffff" />;
          },
          tabBarIconStyle: {
            width: 70,
            height: 40,
            backgroundColor: '#ff6c00',
            borderRadius: 20,
            marginTop: 9,
          },
          headerLeft: () => (
            <AntDesign
              name="arrowleft"
              size={24}
              color="#bdbdbd"
              style={{ marginLeft: 16 }}
              onPress={() => {
                navigation.goBack();
              }}
            />
          ),
        })}
      />
      <PostsTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          headerTitleAlign: 'center',
          headerStyle: {
            height: 88,
            backgroundColor: '#ffffff',
          },
          headerTitleStyle: {
            fontFamily: 'roboto-regular',
            fontWeight: '500',
            fontSize: 17,
          },
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size, color }) => {
            return (
              <Feather
                name="user"
                size={24}
                color="#212121"
                style={{ marginTop: 9 }}
              />
            );
          },
        }}
      />
    </PostsTab.Navigator>
  );
};
