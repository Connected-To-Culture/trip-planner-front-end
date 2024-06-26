/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


import { CreateAccount, Welcome,Signin,TermsAndConditions,ResetPassword} from './screens';
import { StatusBar,StyleSheet} from 'react-native';
import BottomTabNavigation from './navigation/BottomTabNavigation';
import COLORS from './constants/theme';
import exploreCountry from './screens/exploreCountry/exploreCountry';
import MoreExplore from './screens/explore/moreExplore/moreExplore';
import Adventures from './screens/explore/adventures/Adventures.';
import Filter from './screens/explore/filter/Filter';
import DetailsPage from './screens/explore/details/DetailsPage';


import { Provider } from 'react-redux';
import { store } from './Redux/Store'

// Chat component
import ChatComponent from './components/ChatComponent.tsx';
import ChatScreen from './screens/ChatScreen'; // Import the chat screen

function App(): React.JSX.Element {
  
 // Set the status bar background color
StatusBar.setBackgroundColor('white');

// Set the status bar style
StatusBar.setBarStyle('dark-content');

  const Stack=createNativeStackNavigator();
  return (
    <Provider store = {store}>
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Signin' component={Signin} options={{headerShown:false}} />
      <Stack.Screen name='CreateAccount' component={CreateAccount} options={{headerShown:false}} />
      <Stack.Screen name='TermsAndConditions' component={TermsAndConditions} options={{headerShown:false}} />
      <Stack.Screen name='ResetPassword' component={ResetPassword} options={{headerShown:false}} />
      <Stack.Screen name='BottomNavigation' component={BottomTabNavigation} options={{headerShown:false}} />
      <Stack.Screen name='Welcome' component={Welcome} options={{headerShown:false}} />
      <Stack.Screen name='explore-country' component={exploreCountry} options={{headerShown:false}} />
      <Stack.Screen name='more-explore' component={MoreExplore} options={{headerShown:false}} />
      <Stack.Screen name='adventures' component={Adventures} options={{headerShown:false}} />
      <Stack.Screen name='FIlter' component={Filter} options={{headerShown:false}} />
      <Stack.Screen name='Details' component={DetailsPage} options={{headerShown:false}} />
      <Stack.Screen name="Sefa" component={ChatScreen} title="Sefa" options={{ tabBarLabel: 'Sefa' }}/>
    </Stack.Navigator>
  </NavigationContainer>
  </Provider>
  );
}



export default App;

const styles = StyleSheet.create({
  lightContent: {
    backgroundColor: COLORS.white,
    color: COLORS.dark,
  },

});