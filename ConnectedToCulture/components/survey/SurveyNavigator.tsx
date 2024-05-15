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
import {SurveyDataProviderWrapper} from '../../context/surveyData';

const Stack = createNativeStackNavigator();

const SurveyNavigator = () => {
  return (
    <SurveyDataProviderWrapper>
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
        </Stack.Navigator>
      </SafeAreaView>
    </SurveyDataProviderWrapper>
  );
};

export default SurveyNavigator;
