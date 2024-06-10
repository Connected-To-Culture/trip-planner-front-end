/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  CreateAccount,
  Welcome,
  Signin,
  TermsAndConditions,
  ResetPassword,
} from './screens';
import {StatusBar, StyleSheet} from 'react-native';
import BottomTabNavigation from './navigation/BottomTabNavigation';
import COLORS from './constants/theme';
import SurveyNavigator from './components/survey/SurveyNavigator';
import exploreCountry from './screens/exploreCountry/exploreCountry';
import MoreExplore from './screens/explore/moreExplore/moreExplore';
import {SurveyDataProviderWrapper} from './context/surveyData';
import Toast, {BaseToast, ErrorToast} from 'react-native-toast-message';

/*
  1. Create the config
*/
const toastConfig = {
  /*
    Overwrite 'success' type,
    by modifying the existing `BaseToast` component
  */
  success: props => (
    <BaseToast
      {...props}
      style={{borderLeftColor: 'pink'}}
      contentContainerStyle={{paddingHorizontal: 15}}
      text1Style={{fontSize: 15, fontWeight: '400'}}
    />
  ),
  /*
    Overwrite 'error' type,
    by modifying the existing `ErrorToast` component
  */
  error: props => (
    <ErrorToast
      {...props}
      style={{borderLeftColor: 'red', backgroundColor: 'red'}}
      contentContainerStyle={{paddingHorizontal: 10, paddingVertical: 20}}
      text1Style={{fontSize: 16}}
      text2Style={{fontSize: 15, color: 'white'}}
    />
  ),
};

function App(): React.JSX.Element {
  // Set the status bar background color
  StatusBar.setBackgroundColor('white');

  // Set the status bar style
  StatusBar.setBarStyle('dark-content');

  const Stack = createNativeStackNavigator();
  return (
    <SurveyDataProviderWrapper>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Signin' component={Signin} options={{headerShown:false}} />
          <Stack.Screen name='CreateAccount' component={CreateAccount} options={{headerShown:false}} />
          <Stack.Screen name='TermsAndConditions' component={TermsAndConditions} options={{headerShown:false}} />
          <Stack.Screen name='ResetPassword' component={ResetPassword} options={{headerShown:false}} />
          <Stack.Screen name='BottomNavigation' component={BottomTabNavigation} options={{headerShown:false}} />
          <Stack.Screen name='Welcome' component={Welcome} options={{headerShown:false}} />
          <Stack.Screen name='SurveyNavigator' component={SurveyNavigator} options={{headerShown:false}} />
          <Stack.Screen name='explore-country' component={exploreCountry} options={{headerShown:false}} />
          <Stack.Screen name='more-explore' component={MoreExplore} options={{headerShown:false}} />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
      {/* <Toast config={toastConfig} /> */}
    </SurveyDataProviderWrapper>
  );
}

export default App;

const styles = StyleSheet.create({
  lightContent: {
    backgroundColor: COLORS.white,
    color: COLORS.dark,
  },

});
