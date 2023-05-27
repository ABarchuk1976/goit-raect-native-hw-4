import React, { useState, useEffect } from 'react';
import {
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Fontisto, Octicons } from '@expo/vector-icons';
import { clearWarnings } from 'react-native/Libraries/LogBox/Data/LogBoxData';

export const PostsScreen = ({ route }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (route.params)
      setPosts((prevState) => [...prevState, route.params.post]);
  }, [route.params]);

  console.log('POSTS: ', posts);

  const postsLength = posts.length;

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item, idx) => idx.toString()}
        renderItem={({ item: { uri, title, area, location } }) => (
          <View style={styles.postsContainer}>
            <Image source={{ uri }} style={styles.postImage} />
            <View style={styles.postImageContainer}>
              <Text style={styles.postImageTitle}>{title}</Text>
            </View>
            <View style={styles.postInfoContainer}>
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                  style={styles.postInfoBtn}
                  onPress={() => navigation.navigate('Comments', { uri })}
                >
                  <Fontisto name="comment" size={24} color="#CECDCD" />
                  <Text style={styles.postInfoText}></Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.postInfoBtn}
                onPress={() => navigation.navigate('Map', { location })}
              >
                <Octicons name="location" size={24} color="#BDBDBD" />
                <Text style={styles.postInfoText}>{area}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 16,
  },
  avatar: {
    width: 60,
    height: 60,
  },
  userInfo: {
    marginLeft: 10,
  },
  userLogin: {
    fontFamily: 'roboto-regular',
    fontSize: 14,
    color: '#212121',
  },
  userEmail: {
    fontFamily: 'roboto-regular',
    fontSize: 12,
  },
  postsContainer: {
    paddingHorizontal: 16,
  },
  postImage: {
    width: '100%',
    height: 240,
    borderRadius: 8,
  },
  postImageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  postImageTitle: {
    fontFamily: 'roboto-regular',
    fontSize: 16,
    color: '#212121',
    marginBottom: 8,
  },
  postInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  postInfoBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postInfoText: {
    marginLeft: 10,
    fontFamily: 'roboto-regular',
    fontSize: 16,
    color: '#212121',
  },
});
