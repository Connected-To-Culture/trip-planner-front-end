import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SurveyStart from '../../components/survey/SurveyStart'; // Import SurveyStart component

const Stack = createNativeStackNavigator();

const SurveyNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SurveyStart" component={SurveyStart} />
      {/* Define other screens within the Survey Navigator if needed */}
    </Stack.Navigator>
  );
};

export default SurveyNavigator;
