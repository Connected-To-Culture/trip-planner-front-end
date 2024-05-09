import React from 'react';
import {Modal, View, Text, StyleSheet} from 'react-native';
import ReusableButton from '../reusable/reusableButton/ReusableButton';
import COLORS from '../../constants/theme';
import {useNavigation} from '@react-navigation/native';

type SurveyModalProps = {
  visible: boolean,
  onClose: () => void,
};

const SurveyModal: React.FC<SurveyModalProps> = ({visible, onClose}) => {
  const navigation = useNavigation();
  return (
    <Modal
      visible={visible}
      animationType="slide"
      // transparent={true}
      onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <Text>Hello from the modal</Text>
        <View style={{}}>
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
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer: {},
});

export default SurveyModal;
