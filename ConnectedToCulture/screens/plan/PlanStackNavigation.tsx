import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Transportation from './Transportation';
import PlanMainPage from './PlanMainPage';

const PlanStackNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PlanMainPage"
        component={PlanMainPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Transportation"
        component={Transportation}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default PlanStackNavigation;
