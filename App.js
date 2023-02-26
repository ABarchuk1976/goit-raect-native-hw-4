import * as Font from 'expo-font';
import { RegistrationScreen } from './src/screens/auth/RegistrationScreen/RegistrationScreen.jsx';
import { LoginScreen } from './src/screens/auth/LoginScreen/LoginScreen.jsx';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

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
  const AuthStack = createStackNavigator();

  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
  // return <RegistrationScreen />;
  // return <LoginScreen />;
}
