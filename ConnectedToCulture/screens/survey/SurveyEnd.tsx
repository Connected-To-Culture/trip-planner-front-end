import {View, Text, Pressable, StyleSheet} from 'react-native';
import {Image, ScrollView, Dimensions} from 'react-native';
import React, {useState, useEffect} from 'react';
import {NavigationProp} from '@react-navigation/native';
import ResuableButton from '../../components/reusable/reusableButton/ReusableButton';
import COLORS from '../../constants/theme';
import surveyStyles from './survey.style';
import SurveyProgressBar from '../../components/survey/SurveyProgressBar';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons/faXmark';
import SurveyModal from '../../components/survey/SurveyModal';

type SurveyEndProps = {
  navigation: NavigationProp<any>;
};

const SurveyEnd = ({navigation}: SurveyEndProps) => {
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
          styles.surveyEndExtraContainerStyles,
          {flex: orientation === 'landscape' ? undefined : 1},
        ]}>
        <Pressable
          style={surveyStyles.modalXContainer}
          onPress={() => setModalOpen(true)}>
          <FontAwesomeIcon size={28} icon={faXmark} color={COLORS.primary} />
        </Pressable>
        <SurveyProgressBar progress={100} />
        <View style={styles.surveyEndContentContainer}>
          <Image
            source={require('../../assets/images/survey/success_icon.png')}
            style={styles.image}
          />
          <View style={{alignItems: 'center'}}>
            <View style={surveyStyles.textContainer}>
              <Text style={surveyStyles.titleSurveyEnd}>You're All Set!</Text>
              <Text style={surveyStyles.descriptionSurveyEnd}>
                Your survey responses will help us make the best personalized
                trip plan for you!
              </Text>
            </View>
            <ResuableButton
              backgroundColor={COLORS.primary}
              borderColor={COLORS.primary}
              borderRadius={8}
              borderWidth={1}
              btnText="Explore"
              onPress={() => navigation.navigate('Explore')}
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
    height: 110,
    width: '100%',
  },
  image: {
    height: 123,
    width: 123,
  },
  surveyEndExtraContainerStyles: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  surveyEndContentContainer: {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    gap: 20,
    justifyContent: 'space-evenly',
  },
});

export default SurveyEnd;
