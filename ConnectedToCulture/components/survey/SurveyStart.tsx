import {View, Text, Button, StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import React from 'react';
import {NavigationProp} from '@react-navigation/native';
import ResuableButton from '../reusable/reusableButton/ReusableButton';
import globalStylesAndRowWithSpace from '../../constants/global.style';
import COLORS from '../../constants/theme';
import globalStyle from '../../constants/global.style';

type SurveyStartProps = {
  navigation: NavigationProp<any>;
};

const SurveyStart = ({navigation}: SurveyStartProps) => {
  const {width, height} = Dimensions.get('window');
  const {globalStyles} = globalStylesAndRowWithSpace;

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Welcome to C2C survey!</Text>
        <Text style={styles.description}>
          Make smarter trip plans simply by answering the following 10 questions!
        </Text>
        <Text style={styles.estimatedTime}>Estimated time: 3 min</Text>
      </View>
      <ResuableButton
        backgroundColor={COLORS.primary}
        borderColor={COLORS.primary}
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
  );
};

export default SurveyStart;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 20,
    width: 320
  },
  title: {
    color: COLORS.primary,
    fontFamily: 'Almarai',
    fontSize: 24,
    fontWeight: '700',
    letterSpacing: 0,
    lineHeight: 28.8,
    paddingBottom: 0,
  },
  description: {
    color: COLORS.darkGray,
    fontFamily: 'Almarai',
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 19.2,
    marginBottom: 16,
    paddingBottom: 0,
    textAlign: 'center',
  },
  estimatedTime: {
    color: COLORS.black,
    fontFamily: 'Almarai',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0,
    lineHeight: 19.2,
    marginBottom: 16,
    paddingBottom: 0,
    textAlign: 'center',
  },
});
