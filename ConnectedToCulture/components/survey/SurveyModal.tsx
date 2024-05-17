import React from 'react';
import {Modal, View, Text, TouchableOpacity} from 'react-native';
import ReusableButton from '../reusable/reusableButton/ReusableButton';
import COLORS from '../../constants/theme';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import surveyModalStyles from './surveyModal.style';
import {RootStackParamList} from '../../navigation/types';

type SurveyModalProps = {
  visible: boolean;
  onClose: () => void;
};

const SurveyModal: React.FC<SurveyModalProps> = ({visible, onClose}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}>
      <TouchableOpacity
        style={surveyModalStyles.overlay}
        activeOpacity={1}
        onPress={onClose}>
        <View style={surveyModalStyles.centeredView}>
          <View style={surveyModalStyles.modalView}>
            <Text style={surveyModalStyles.modalHeader}>Leaving Survey</Text>
            <Text style={surveyModalStyles.modalParagraph}>
              Are you sure you want to end the survey now?
            </Text>
            <View style={surveyModalStyles.buttonContainer}>
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
                  navigation.navigate('Home');
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

export default SurveyModal;
