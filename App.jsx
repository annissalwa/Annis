import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { StatusBar } from 'expo-status-bar';
import { Alert, Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View, VirtualizedList } from 'react-native';
import Home from './Screens/Home';
import Recommendation from './Screens/Recommendation';

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Recommendation" component={Recommendation} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

