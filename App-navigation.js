/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import A1 from "./a1"
import A2 from "./a2"

const Tab = createBottomTabNavigator();
const App = ()=> {

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="a1" component={A1} />
        <Tab.Screen name="a2" component={A2} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default App;
