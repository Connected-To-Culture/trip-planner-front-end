import React from 'react';
import {Modal, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ReusableButton from '../reusable/reusableButton/ReusableButton';
import COLORS from '../../constants/theme';
import {useNavigation} from '@react-navigation/native';

type SurveyModalProps = {
  visible: boolean;
  onClose: () => void;
};

const SurveyModal: React.FC<SurveyModalProps> = ({visible, onClose}) => {
  const navigation = useNavigation();
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}>
      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPress={onClose}>
        <View style={styles.centeredView} >
          <View style={styles.modalView}>
            <Text>Leaving Survey</Text>
            <Text>Are you sure you want to end the survey now?</Text>
            <View style={styles.buttonContainer}>
              <ReusableButton
                backgroundColor={COLORS.white}
                borderColor={COLORS.primary}
                borderRadius={8}
                borderWidth={1}
                btnText="Cancel"
                onPress={onClose}
                paddingHorizantal={32}
                paddingVertical={8}
                size={14}
                textColor={COLORS.primary}
                width={110}
              />
              <ReusableButton
                backgroundColor={COLORS.primary}
                borderColor={COLORS.primary}
                borderRadius={8}
                borderWidth={1}
                btnText="Leave"
                onPress={() => {
                  onClose();
                  navigation.navigate('BottomNavigation');
                }}
                paddingHorizantal={32}
                paddingVertical={8}
                size={14}
                textColor={COLORS.white}
                width={110}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    height: 187
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
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

export default SurveyModal;
