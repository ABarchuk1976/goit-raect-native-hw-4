import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

import React, { useState } from 'react';

const INITSTATE = {
  email: '',
  password: '',
  isShownKeyboard: false,
  isShownPassword: false,
};

const INPUTS = {
  email: 'email',
  password: 'password',
};

export const LoginScreen = () => {
  const [isShownKeyboard, setIsShownKeyboard] = useState(
    INITSTATE.isShownKeyboard
  );
  const [activeInput, setActiveInput] = useState(null);
  const [isShownPassword, setIsShownPassword] = useState(
    INITSTATE.isShownPassword
  );

  const [email, setEmail] = useState(INITSTATE.email);
  const [password, setPassword] = useState(INITSTATE.password);

  const hideKeyboard = () => {
    setIsShownKeyboard(false);
    Keyboard.dismiss();
  };

  const resetForm = () => {
    setEmail(INITSTATE.email);
    setPassword(INITSTATE.password);
  };

  const handleSubmit = () => {
    hideKeyboard();
    console.log('Email: ', email, ', Password: ', password);
    resetForm();
  };

  const togglePassword = () => {
    setIsShownPassword(!isShownPassword);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground
        style={styles.bgImage}
        source={require('../../../../assets/images/main-background.jpeg')}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.section}
        >
          <View
            style={{
              ...styles.container,
              paddingBottom: isShownKeyboard ? 194 : 144,
            }}
          >
            <Text style={styles.formTitle}>Login</Text>

            <View style={styles.form}>
              <View style={styles.inputsWrapper}>
                <TextInput
                  style={{
                    ...styles.input,
                    marginTop: 33,
                    backgroundColor:
                      activeInput === INPUTS.email ? '#ffffff' : '#f6f6f6',
                    borderColor:
                      activeInput === INPUTS.email ? '#ff6c00' : '#e8e8e8',
                  }}
                  inputMode="email"
                  value={email}
                  placeholder="Email address..."
                  placeholderTextColor="#bdbdbd"
                  require
                  autoFocus={true}
                  textAlign="left"
                  autoCapitalize="none"
                  onChangeText={setEmail}
                  onFocus={() => {
                    setIsShownKeyboard(true);
                    setActiveInput(INPUTS.email);
                  }}
                  onBlur={() => {
                    setIsShownKeyboard(false);
                    setActiveInput(null);
                  }}
                />

                <TextInput
                  style={{
                    ...styles.input,
                    backgroundColor:
                      activeInput === INPUTS.password ? '#ffffff' : '#f6f6f6',
                    borderColor:
                      activeInput === INPUTS.password ? '#ff6c00' : '#e8e8e8',
                  }}
                  inputMode="text"
                  value={password}
                  placeholder="Password..."
                  placeholderTextColor="#bdbdbd"
                  require
                  textAlign="left"
                  secureTextEntry={isShownPassword ? 'false' : 'true'}
                  autoCapitalize="none"
                  onChangeText={setPassword}
                  onFocus={() => {
                    setIsShownKeyboard(true);
                    setActiveInput(INPUTS.password);
                  }}
                  onBlur={() => {
                    setIsShownKeyboard(false);
                    setActiveInput(null);
                  }}
                />

                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.togglePassword}
                  onPress={togglePassword}
                >
                  <Text style={styles.text}>
                    {isShownPassword ? 'Hide' : 'Show'}
                  </Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.submitBtn}
                onPress={handleSubmit}
              >
                <Text style={styles.btnTitle}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8} style={styles.loginRef}>
                <Text style={styles.text}>Don't have an account? Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
    resizeMode: 'cover',
  },

  section: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  container: {
    justifyContent: 'flex-start',
    width: '100%',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  formTitle: {
    textAlign: 'center',
    marginTop: 32,
    fontSize: 30,
    fontWeight: '500',
    lineHeight: 35,
    color: '#212121',
    fontFamily: 'roboto-regular',
  },
  form: {
    marginHorizontal: 16,
  },

  input: {
    marginTop: 16,
    // backgroundColor: '#f6f6f6',
    borderRadius: 8,
    // borderColor: '#e8e8e8',
    borderWidth: 1,
    padding: 16,
    color: '#212121',
    fontSize: 16,
    lineHeight: 19,
    fontFamily: 'roboto-regular',
  },
  submitBtn: {
    backgroundColor: '#ff6c00',
    marginHorizontal: 16,
    padding: 16,
    marginTop: 43,
    borderRadius: 25,
  },
  btnTitle: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 19,
    fontFamily: 'roboto-regular',
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 19,
    color: '#1B4371',
    fontFamily: 'roboto-regular',
  },
  loginRef: {
    marginTop: 16,
  },
  togglePassword: {
    position: 'absolute',
    right: 16,
    bottom: 16,
  },
  inputsWrapper: {
    position: 'relative',
  },
});
