import { useEffect, useState, useCallback } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';

import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { AuthContext } from './src/services/context';

import { authResult } from './src/services/router';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  const routing = authResult(isAuth);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          'roboto-regular': require('./assets/fonts/roboto_regular.ttf'),
        });
      } catch (error) {
        console.warn(error);
      } finally {
        setIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      <NavigationContainer>
        <View style={styles.container} onLayout={onLayoutRootView}>
          {routing}
        </View>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
