/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

export default App;


import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerContentComponentProps } from '@react-navigation/drawer';
import { Image, View, StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import GamesScreen from './screens/GamesScreen';
import QuizScreen from './screens/QuizScreen';
import SpeechAnalysisScreen from './screens/SpeechAnalysisScreen';
import AIAssistantScreen from './screens/AIAssistantScreen';
import ResourcesScreen from './screens/ResourcesScreen';
import AlzheimerDetectorScreen from './screens/AlzheimerDetectorScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import ProfileScreen from './screens/ProfileScreen';
import { UserProvider } from './context/UserContext';



const Drawer = createDrawerNavigator();

function LogoHeader() {
  return (
    <View style={{ alignItems: 'center', paddingTop: 16, paddingBottom: 8, backgroundColor: '#fff' }}>
      <Image source={require('./assets/SYNAPSE.png')} style={{ width: 60, height: 60, resizeMode: 'contain' }} />
    </View>
  );
}

function CustomDrawerContent(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView {...props}>
      <LogoHeader />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}


import React from 'react';
import { TouchableOpacity } from 'react-native';

function HamburgerMenu({ navigation }: { navigation: any }) {
  return (
    <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ marginLeft: 16, marginRight: 8, padding: 8 }}>
      <View style={{ width: 28, height: 28, justifyContent: 'center' }}>
        <View style={{ height: 3, backgroundColor: '#2d7be5', marginBottom: 5, borderRadius: 2 }} />
        <View style={{ height: 3, backgroundColor: '#2d7be5', marginBottom: 5, borderRadius: 2 }} />
        <View style={{ height: 3, backgroundColor: '#2d7be5', borderRadius: 2 }} />
      </View>
    </TouchableOpacity>
  );
}

function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          drawerContent={props => <CustomDrawerContent {...props} />}
          screenOptions={({ navigation }) => ({
            headerLeft: () => (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <HamburgerMenu navigation={navigation} />
                <Image
                  source={require('./assets/SYNAPSE.png')}
                  style={{ width: 38, height: 38, resizeMode: 'contain' }}
                />
              </View>
            ),
            headerStyle: { backgroundColor: '#fff', elevation: 0, shadowOpacity: 0 },
          })}
        >
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Games" component={GamesScreen} />
          <Drawer.Screen name="Quiz" component={QuizScreen} />
          <Drawer.Screen name="Speech Analysis" component={SpeechAnalysisScreen} />
          <Drawer.Screen name="AI Assistant" component={AIAssistantScreen} />
          <Drawer.Screen name="Resources" component={ResourcesScreen} />
          <Drawer.Screen name="Alzheimer Detector" component={AlzheimerDetectorScreen} />
          <Drawer.Screen name="Profile" component={ProfileScreen} />
          <Drawer.Screen name="Log In" component={LoginScreen} />
          <Drawer.Screen name="Sign Up" component={SignUpScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}


