/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


import { CreateAccount, Welcome,Signin,TermsAndConditions,ResetPassword,CreateNewPassword,CheckYourEmail} from './screens';
import {CountryDashboard} from './screens';
import { StatusBar,StyleSheet} from 'react-native';
import BottomTabNavigation from './navigation/BottomTabNavigation';
import COLORS from './constants/theme';

function App(): React.JSX.Element {
 // Set the status bar background color
StatusBar.setBackgroundColor('white');

// Set the status bar style
StatusBar.setBarStyle('dark-content');

  const Stack=createNativeStackNavigator();
  return (
    
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Signin' component={Signin} options={{headerShown:false}} />
      <Stack.Screen name='CreateAccount' component={CreateAccount} options={{headerShown:false}} />
      <Stack.Screen name='TermsAndConditions' component={TermsAndConditions} options={{headerShown:false}} />
      <Stack.Screen name='ResetPassword' component={ResetPassword} options={{headerShown:false}} />
      <Stack.Screen name='CheckYourEmail' component={CheckYourEmail} options={{headerShown:false}} />
      <Stack.Screen name='CreateNewPassword' component={CreateNewPassword} options={{headerShown:false}} />
      <Stack.Screen name='BottomNavigation' component={BottomTabNavigation} options={{headerShown:false}} />
      <Stack.Screen name='Welcome' component={Welcome} options={{headerShown:false}} />
      <Stack.Screen name='CountryDashboard' component={CountryDashboard} options={{headerShown:false}} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}


export default App;

const styles = StyleSheet.create({
  lightContent: {
    backgroundColor: COLORS.white,
    color: COLORS.dark,
  },

});