import {StyleSheet} from 'react-native';
import COLORS from '../../constants/theme';
import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const surveyStyles = StyleSheet.create({
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

export {surveyStyles as default, height, width};
