import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SurveyStart from '../../components/survey/SurveyStart';
import Survey1 from '../../components/survey/Survey1';
import {SafeAreaView} from 'react-native-safe-area-context';

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
        {/* Define other screens within the Survey Navigator if needed */}
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default SurveyNavigator;
