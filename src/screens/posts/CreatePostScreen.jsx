import { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { Camera } from 'expo-camera';
import * as Location from 'expo-location';
import { AntDesign, EvilIcons } from '@expo/vector-icons';

const initialPost = {
  uri: '',
  title: '',
  area: '',
  location: null,
};

export const CreatePostScreen = () => {
  const [post, setPost] = useState(initialPost);
  const [camera, setCamera] = useState(null);
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);

  useEffect(() => {
    const handleKeyboardShown = Keyboard.addListener('keyboardDidShow', () => {
      setIsKeyboardShown(true);
    });

    const handleKeyboardHidden = Keyboard.addListener('keyboardDidHide', () => {
      setIsKeyboardShown(false);
    });

    return () => {
      handleKeyboardShown.remove();
      handleKeyboardHidden.remove();
    };
  }, []);

  const handleHideKeyboard = () => {
    setIsKeyboardShown(false);
    Keyboard.dismiss();
  };

  const handleSnapPhoto = async () => {
    try {
      const uriData = await camera.takePictureAsync();
      const uri = uriData.uri;
      //const locationData = await Location.getCurrentPositionAsync();
      //const location = locationData.coords;

      console.log('URI: ', uri);

      setPost((prevState) => ({ ...prevState, uri }));
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleChangeInput = (type, value) => {
    setPost((prevState) => ({ ...prevState, [type]: value }));
  };

  return (
    <TouchableWithoutFeedback onPress={handleHideKeyboard}>
      <View style={styles.container}>
        {post.uri ? (
          <View>
            <Image source={{ uri: post.uri }} style={styles.photo} />
          </View>
        ) : (
          <Camera style={styles.camera} ref={setCamera}>
            <TouchableOpacity
              onPress={handleSnapPhoto}
              style={styles.iconContainer}
            >
              <AntDesign style={styles.icon} name="camera" size={24} />
            </TouchableOpacity>
          </Camera>
        )}
        <View style={styles.inputContainer}>
          <TextInput
            style={{ ...styles.input, marginBottom: 16 }}
            placeholder="Назва..."
            onFocus={() => setIsKeyboardShown(true)}
            value={post.title}
            onChangeText={(value) => handleChangeInput('title', value)}
          />
          <TextInput
            style={{ ...styles.input, paddingLeft: 28 }}
            placeholder="Місцевість..."
            onFocus={() => setIsKeyboardShown(true)}
            value={post.area}
            onChangeText={(value) => handleChangeInput('area', value)}
          />
          <EvilIcons
            style={{
              position: 'absolute',
              top: 70,
              left: 16,
              color: '#cecdcd',
            }}
            name="location"
            size={24}
            color="black"
          />
        </View>
        <TouchableOpacity
          onPress={() => console.log('Press')}
          disabled={!post.uri}
          style={{
            ...styles.sendBtn,
            backgroundColor: post.uri ? '#ff6c00' : '#f6f6f6',
          }}
        >
          <Text
            style={{
              ...styles.btnTitle,
              color: post.uri ? '#ffffff' : '#bdbdbd',
            }}
          >
            Опубліковати
          </Text>
        </TouchableOpacity>
        <View style={styles.removeContainer}>
          <TouchableOpacity
            onPress={() => {
              setPost(initialPost);
            }}
            disabled={!post.uri}
            style={{
              ...styles.removeBtn,
              backgroundColor: post.uri ? '#ff6c00' : '#f6f6f6',
            }}
          >
            <AntDesign
              style={{
                ...styles.removeIcon,
                color: post.uri ? '#ffffff' : '#bdbdbd',
              }}
              name="delete"
              size={24}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
  },
  camera: {
    height: 240,
    marginTop: 32,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  photo: {
    height: 240,
    borderRadius: 8,
  },
  iconContainer: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    position: 'absolute',
    color: '#ffffff',
  },
  inputContainer: {
    position: 'relative',
    marginTop: 22,
  },
  input: {
    height: 45,
    marginHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e8e8e8',
    fontFamily: 'roboto-regular',
    fontSize: 16,
    color: '#212121',
  },
  sendBtn: {
    textAlign: 'center',
    marginTop: 32,
    paddingVertical: 16,
    backgroundColor: '#ff6c00',
    borderRadius: 100,
  },
  btnTitle: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'roboto-regular',
  },
  removeContainer: {
    display: 'flex',
    // justifyContent: "flex-end",
    alignItems: 'center',
    marginTop: 80,
  },
  removeBtn: {
    display: 'flex',
    width: 70,
    height: 70,
    backgroundColor: '#f6f6f6',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
