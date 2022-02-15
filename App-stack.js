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
 import { createStackNavigator } from '@react-navigation/stack';
 
 import A1 from "./a1"
 import A2 from "./a2"

 const Stack = createStackNavigator();
 const App = ()=> {
 
   return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="a1" component={A1} />
        <Stack.Screen name="a2" component={A2} />
        </Stack.Navigator>
      </NavigationContainer>
   );
 };
 export default App;
 