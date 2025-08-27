/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

export default App;

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import GamesScreen from './screens/GamesScreen';
import QuizScreen from './screens/QuizScreen';
import SpeechAnalysisScreen from './screens/SpeechAnalysisScreen';
import AIAssistantScreen from './screens/AIAssistantScreen';
import ResourcesScreen from './screens/ResourcesScreen';
import AlzheimerDetectorScreen from './screens/AlzheimerDetectorScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';



const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Games" component={GamesScreen} />
        <Drawer.Screen name="Quiz" component={QuizScreen} />
        <Drawer.Screen name="Speech Analysis" component={SpeechAnalysisScreen} />
        <Drawer.Screen name="AI Assistant" component={AIAssistantScreen} />
        <Drawer.Screen name="Resources" component={ResourcesScreen} />
        <Drawer.Screen name="Alzheimer Detector" component={AlzheimerDetectorScreen} />
        <Drawer.Screen name="Log In" component={LoginScreen} />
        <Drawer.Screen name="Sign Up" component={SignUpScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


