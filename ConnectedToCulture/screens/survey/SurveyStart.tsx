import {View, Text, Pressable, StyleSheet} from 'react-native';
import {Image, ScrollView, Dimensions} from 'react-native';
import React, {useState, useEffect} from 'react';
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
  const [orientation, setOrientation] = useState(
    Dimensions.get('window').height > Dimensions.get('window').width
      ? 'portrait'
      : 'landscape',
  );

  useEffect(() => {
    const onChange = () => {
      const {height, width} = Dimensions.get('window');
      setOrientation(height > width ? 'portrait' : 'landscape');
    };
    Dimensions.addEventListener('change', onChange);
  }, []);

  return (
    <View style={surveyStyles.container}>
      <ScrollView
        contentContainerStyle={[
          styles.surveyStartExtraContainerStyles,
          {flex: orientation === 'landscape' ? undefined : 1}
        ]}>
        <Pressable
          style={surveyStyles.modalXContainer}
          onPress={() => setModalOpen(true)}>
          <FontAwesomeIcon size={28} icon={faXmark} color={COLORS.primary} />
        </Pressable>
        <View style={styles.surveyStartContentContainer}>
          <Image
            source={require('../../assets/images/survey/start_img.png')}
            style={styles.image}
          />
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
          {orientation === 'portrait' ? <View style={styles.empty} /> : null}
        </View>
      </ScrollView>
      <SurveyModal visible={modalOpen} onClose={() => setModalOpen(false)} />
    </View>
  );
};

const styles = StyleSheet.create({
  empty: {
    height: 120,
    width: '100%',
  },
  image: {
    height: 190,
    width: 190,
  },
  surveyStartExtraContainerStyles: {
    display: 'flex',
    flex: 1,
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
