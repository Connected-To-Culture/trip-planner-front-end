import {StyleSheet} from 'react-native';
import COLORS from '../../constants/theme';
import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const surveyStyles = StyleSheet.create({
  backNextBtnContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    marginTop: 100,
  },
  backNextBtnContainerLandscape: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    marginTop: 70,
  },
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
    justifyContent: 'center',
    padding: 20,
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
  otherText: {
    color: COLORS.black,
    fontFamily: 'Almarai',
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 19.2,
    paddingBottom: 0,
  },
  question: {
    color: COLORS.black,
    fontFamily: 'Almarai',
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 0,
    lineHeight: 24,
    paddingBottom: 0,
  },
  specifyOtherContainer: {
    alignItems: 'center',
    display: 'flex',
    gap: 10,
    flexDirection: 'row',
    marginTop: 10
  },
  subtitle: {
    color: COLORS.darkGray,
    fontFamily: 'Almarai',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0,
    lineHeight: 24,
    marginBottom: 16,
    paddingBottom: 0,
  },
  surveyBtnsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 20,
    width: 320
  },
  textInput: {
    backgroundColor: '#CECECE',
    borderColor: '#CECECE',
    borderRadius: 10,
    borderWidth: 1,
    height: 38,
    paddingLeft: 10,
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

});

export {surveyStyles as default, height, width};
