import {View, Text, Button} from 'react-native';
import React from 'react';
import {NavigationProp} from '@react-navigation/native';

type PlanMainPageProps = {
  navigation: NavigationProp<any>;
};

const PlanMainPage = ({navigation}: PlanMainPageProps) => {
  return (
    <View>
      <Text>Plan</Text>
      <Button
        onPress={() => navigation.navigate('Transportation')}
        title="Transportation"
      />
    </View>
  );
};

export default PlanMainPage;
