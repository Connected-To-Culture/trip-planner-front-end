/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import SurveyStart from '../../screens/survey/SurveyStart';
import Survey1 from '../../screens/survey/Survey1';
import Survey2 from '../../screens/survey/Survey2';
import Survey3 from '../../screens/survey/Survey3';
import Survey4 from '../../screens/survey/Survey4';
import Survey5 from '../../screens/survey/Survey5';
import Survey6 from '../../screens/survey/Survey6';
import Survey7 from '../../screens/survey/Survey7';
import Survey8 from '../../screens/survey/Survey8';
import Survey9 from '../../screens/survey/Survey9';
import Survey10 from '../../screens/survey/Survey10';
import SurveyEnd from '../../screens/survey/SurveyEnd';

const Stack = createNativeStackNavigator();

const SurveyNavigator = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Stack.Navigator>
        <Stack.Screen
          name="SurveyStart"
          component={SurveyStart}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Survey1"
          component={Survey1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Survey2"
          component={Survey2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Survey3"
          component={Survey3}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Survey4"
          component={Survey4}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Survey5"
          component={Survey5}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Survey6"
          component={Survey6}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Survey7"
          component={Survey7}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Survey8"
          component={Survey8}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Survey9"
          component={Survey9}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Survey10"
          component={Survey10}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SurveyEnd"
          component={SurveyEnd}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default SurveyNavigator;
