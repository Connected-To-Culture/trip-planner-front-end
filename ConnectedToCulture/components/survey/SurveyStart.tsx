import {View, Text} from 'react-native';
import React from 'react';
import {NavigationProp} from '@react-navigation/native';
import ResuableButton from '../reusable/reusableButton/ReusableButton';
import COLORS from '../../constants/theme';
import surveyStyles from './survey.style';

type SurveyStartProps = {
  navigation: NavigationProp<any>;
};

const SurveyStart = ({navigation}: SurveyStartProps) => {

  return (
    <View style={surveyStyles.container}>
      <View style={{alignItems: 'center'}}>
        <View style={surveyStyles.textContainer}>
          <Text style={surveyStyles.title}>Welcome to C2C survey!</Text>
          <Text style={surveyStyles.description}>
            Make smarter trip plans simply by answering the following 10
            questions!
          </Text>
          <Text style={surveyStyles.estimatedTime}>Estimated time: 3 min</Text>
        </View>
        <ResuableButton
          backgroundColor={COLORS.primary}
          borderColor={COLORS.primary}
          borderRadius={8}
          borderWidth={1}
          btnText="Start"
          onPress={() => navigation.navigate('Survey1')}
          paddingHorizantal={32}
          paddingVertical={8}
          size={16}
          textColor={COLORS.white}
          width={187}
        />
      </View>
    </View>
  );
};

export default SurveyStart;
