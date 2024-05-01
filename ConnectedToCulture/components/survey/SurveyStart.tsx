import {View, Text, Button, StyleSheet} from 'react-native';
import React from 'react';
import ResuableButton from '../reusable/reusableButton/ReusableButton';
import globalStyle from '../../constants/global.style';
import COLORS from '../../constants/theme';

const SurveyStart = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Welcome to C2C survey!</Text>
        <Text style={styles.description}>Make smarter trip plans simply by answering the following 10 questions!</Text>
        <Text style={styles.estimatedTime}>Estimated time: 3 min</Text>
      </View>
      <ResuableButton
        btnText='Start'
        textColor={COLORS.white}
        backgroundColor={COLORS.primary}
        width={187}
        height={50}
        onPress={() => navigation.navigate('Survey1')}
      />
    </View>
  );
};

export default SurveyStart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  textContainer: {
    marginBottom: 20,
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: `${COLORS.primary}`

  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center'
  },
  estimatedTime: {
    fontSize: 14,
  },
});
