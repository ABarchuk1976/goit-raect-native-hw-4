import * as Font from 'expo-font';

import { NavigationContainer } from '@react-navigation/native';

import { authResult } from './src/services/router';

const loadFonts = async () => {
  await Font.loadAsync({
    'roboto-regular': require('./assets/fonts/roboto_regular.ttf'),
  });
};

loadFonts();

export default function App() {
  // const [isReady, setIsReady] = useState();

  // if (!isReady) {
  //   return (

  //   );
  // }

  return <NavigationContainer>{authResult({})}</NavigationContainer>;
}
