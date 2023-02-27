import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import { PostsScreen } from './PostsScreen';
import { CreatePostScreen } from './CreatePostScreen.jsx';
import { ProfileScreen } from './ProfileScreen.jsx';

const PostsTab = createBottomTabNavigator();

export const HomeScreen = ({ navigation }) => {
  return (
    <PostsTab.Navigator initialRouteName="Posts">
      <PostsTab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
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
            />
          ),
        }}
      />
      <PostsTab.Screen
        name="CreatePost"
        component={CreatePostScreen}
        options={{
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
            />
          ),
        }}
      />
      <PostsTab.Screen name="Profile" component={ProfileScreen} />
    </PostsTab.Navigator>
  );
};
