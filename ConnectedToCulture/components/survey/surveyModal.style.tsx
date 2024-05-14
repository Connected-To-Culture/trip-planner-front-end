import {StyleSheet} from 'react-native';
import COLORS from '../../constants/theme';

const surveyModalStyles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'flex-end',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalHeader: {
    color: COLORS.primary,
    fontFamily: 'Almarai',
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 0,
    lineHeight: 24,
  },
  modalParagraph: {
    color: COLORS.dark,
    fontFamily: 'Almarai',
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 19.2,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: 287,
    height: 187,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default surveyModalStyles;
