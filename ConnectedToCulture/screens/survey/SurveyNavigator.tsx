import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import SurveyStart from '../../components/survey/SurveyStart';
import Survey1 from '../../components/survey/Survey1';
import Survey2 from '../../components/survey/Survey2';
import Survey3 from '../../components/survey/Survey3';

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
        {/* Define other screens within the Survey Navigator if needed */}
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default SurveyNavigator;
