import {View, Text, Pressable, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {NavigationProp} from '@react-navigation/native';
import ResuableButton from '../../components/reusable/reusableButton/ReusableButton';
import COLORS from '../../constants/theme';
import surveyStyles from './survey.style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons/faXmark';
import SurveyModal from '../../components/survey/SurveyModal';

type SurveyStartProps = {
  navigation: NavigationProp<any>;
};

const SurveyStart = ({navigation}: SurveyStartProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <View
      style={[surveyStyles.container, styles.surveyStartExtraContainerStyles]}>
      <Pressable
        style={surveyStyles.modalXContainer}
        onPress={() => setModalOpen(true)}>
        <FontAwesomeIcon size={28} icon={faXmark} color={COLORS.primary} />
      </Pressable>
      <View style={styles.surveyStartContentContainer}>
        <View style={{alignItems: 'center'}}>
          <View style={surveyStyles.textContainer}>
            <Text style={surveyStyles.title}>Welcome to C2C survey!</Text>
            <Text style={surveyStyles.description}>
              Make smarter trip plans simply by answering the following 10
              questions!
            </Text>
            <Text style={surveyStyles.estimatedTime}>
              Estimated time: 3 min
            </Text>
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
      <SurveyModal visible={modalOpen} onClose={() => setModalOpen(false)} />
    </View>
  );
};

const styles = StyleSheet.create({
  surveyStartExtraContainerStyles: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  surveyStartContentContainer: {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
})

export default SurveyStart;
