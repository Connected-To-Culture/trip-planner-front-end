import {View, Text, ScrollView, Pressable} from 'react-native';
import {Dimensions} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import {NavigationProp} from '@react-navigation/native';
import ResuableButton from '../../components/reusable/reusableButton/ReusableButton';
import COLORS from '../../constants/theme';
import surveyStyles from './survey.style';
import {SurveyDataContext} from '../../context/surveyData';
import SurveyProgressBar from '../../components/survey/SurveyProgressBar';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons/faXmark';
import SurveyModal from '../../components/survey/SurveyModal';

type Survey6Props = {
  navigation: NavigationProp<any>;
};

const Survey6 = ({navigation}: Survey6Props) => {
  const {selected, setSelected} = useContext(SurveyDataContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [curWidth, setCurWidth] = useState(Dimensions.get('window').width);
  const [orientation, setOrientation] = useState(
    Dimensions.get('window').height > Dimensions.get('window').width
      ? 'portrait'
      : 'landscape',
  );

  const deselect = {
    q6Hotels: false,
    q6Hostels: false,
    q6VacaRentals: false,
    q6Camping: false,
  };

  useEffect(() => {
    const onChange = () => {
      const {height, width} = Dimensions.get('window');
      setOrientation(height > width ? 'portrait' : 'landscape');
      setCurWidth(width);
    };
    const subscription = Dimensions.addEventListener('change', onChange);
    return () => subscription?.remove();
  }, []);

  useEffect(() => {
    const shouldEnableButton =
      selected.q6Hotels ||
      selected.q6Hostels ||
      selected.q6VacaRentals ||
      selected.q6Camping ||
      selected.q6notSure;

    setDisabled(!shouldEnableButton);
  }, [selected]);

  return (
    <View style={surveyStyles.container}>
      <ScrollView
        contentContainerStyle={[
          surveyStyles.scrollViewStyles,
          {flex: orientation === 'landscape' ? undefined : 1},
        ]}
        showsVerticalScrollIndicator={false}>
        <View style={surveyStyles.subContainer}>
          <View>
            <Pressable
              style={surveyStyles.modalXContainer}
              onPress={() => setModalOpen(true)}>
              <FontAwesomeIcon
                size={28}
                icon={faXmark}
                color={COLORS.primary}
              />
            </Pressable>
            <SurveyProgressBar progress={55} />
            <Text style={surveyStyles.question}>
              Q6. What are your preferred accommodation types?
            </Text>
            <Text style={surveyStyles.subtitle}>(Select all that apply)</Text>

            <View style={surveyStyles.surveyBtnsContainer}>
              <ResuableButton
                alignItems="flex-start"
                backgroundColor={
                  selected.q6Hotels ? COLORS.primary : COLORS.white
                }
                borderColor={
                  selected.q6Hotels ? COLORS.primary : COLORS.black400
                }
                borderRadius={10}
                borderWidth={1}
                btnText="Hotels"
                onPress={() =>
                  setSelected({
                    ...selected,
                    q6notSure: false,
                    q6Hotels: !selected.q6Hotels,
                  })
                }
                paddingHorizantal={24}
                paddingVertical={13}
                size={16}
                textColor={selected.q6Hotels ? COLORS.white : COLORS.black}
                width={
                  orientation === 'portrait' ? curWidth * 0.88 : curWidth * 0.7
                }
              />
              <ResuableButton
                alignItems="flex-start"
                backgroundColor={
                  selected.q6Hostels ? COLORS.primary : COLORS.white
                }
                borderColor={
                  selected.q6Hostels ? COLORS.primary : COLORS.black400
                }
                borderRadius={10}
                borderWidth={1}
                btnText="Hostels"
                onPress={() =>
                  setSelected({
                    ...selected,
                    q6notSure: false,
                    q6Hostels: !selected.q6Hostels,
                  })
                }
                paddingHorizantal={24}
                paddingVertical={13}
                size={16}
                textColor={selected.q6Hostels ? COLORS.white : COLORS.black}
                width={
                  orientation === 'portrait' ? curWidth * 0.88 : curWidth * 0.7
                }
              />
              <ResuableButton
                alignItems="flex-start"
                backgroundColor={
                  selected.q6VacaRentals ? COLORS.primary : COLORS.white
                }
                borderColor={
                  selected.q6VacaRentals ? COLORS.primary : COLORS.black400
                }
                borderRadius={10}
                borderWidth={1}
                btnText="Vacation rentals (e.g., Airbnb)"
                onPress={() =>
                  setSelected({
                    ...selected,
                    q6notSure: false,
                    q6VacaRentals: !selected.q6VacaRentals,
                  })
                }
                paddingHorizantal={24}
                paddingVertical={13}
                size={16}
                textColor={selected.q6VacaRentals ? COLORS.white : COLORS.black}
                width={
                  orientation === 'portrait' ? curWidth * 0.88 : curWidth * 0.7
                }
              />
              <ResuableButton
                alignItems="flex-start"
                backgroundColor={
                  selected.q6Camping ? COLORS.primary : COLORS.white
                }
                borderColor={
                  selected.q6Camping ? COLORS.primary : COLORS.black400
                }
                borderRadius={10}
                borderWidth={1}
                btnText="Camping"
                onPress={() =>
                  setSelected({
                    ...selected,
                    q6notSure: false,
                    q6Camping: !selected.q6Camping,
                  })
                }
                paddingHorizantal={24}
                paddingVertical={13}
                size={16}
                textColor={selected.q6Camping ? COLORS.white : COLORS.black}
                width={
                  orientation === 'portrait' ? curWidth * 0.88 : curWidth * 0.7
                }
              />
              <ResuableButton
                alignItems="flex-start"
                backgroundColor={
                  selected.q6notSure ? COLORS.primary : COLORS.white
                }
                borderColor={
                  selected.q6notSure ? COLORS.primary : COLORS.black400
                }
                borderRadius={10}
                borderWidth={1}
                btnText="I'm not sure yet"
                onPress={() =>
                  setSelected({
                    ...selected,
                    ...deselect,
                    q6notSure: !selected.q6notSure,
                  })
                }
                paddingHorizantal={24}
                paddingVertical={13}
                size={16}
                textColor={selected.q6notSure ? COLORS.white : COLORS.black}
                width={
                  orientation === 'portrait' ? curWidth * 0.88 : curWidth * 0.7
                }
              />
            </View>
          </View>

          <View
            style={
              orientation === 'portrait'
                ? surveyStyles.backNextBtnContainer
                : surveyStyles.backNextBtnContainerLandscape
            }>
            <ResuableButton
              backgroundColor={COLORS.white}
              borderColor={COLORS.primary}
              borderRadius={8}
              borderWidth={1}
              btnText="Back"
              onPress={() => navigation.navigate('Survey5')}
              paddingHorizantal={16}
              paddingVertical={8}
              size={16}
              textColor={COLORS.primary}
              width={
                orientation === 'portrait' ? curWidth * 0.42 : curWidth * 0.34
              }
            />
            <ResuableButton
              backgroundColor={disabled ? COLORS.darkGray : COLORS.primary}
              borderColor={disabled ? COLORS.darkGray : COLORS.primary}
              borderRadius={8}
              borderWidth={1}
              btnText={disabled ? '🚫' : 'Next'}
              disabled={disabled}
              onPress={() => navigation.navigate('Survey7')}
              paddingHorizantal={16}
              paddingVertical={8}
              size={16}
              textColor={COLORS.white}
              width={
                orientation === 'portrait' ? curWidth * 0.42 : curWidth * 0.34
              }
            />
          </View>
        </View>
      </ScrollView>
      <SurveyModal visible={modalOpen} onClose={() => setModalOpen(false)} />
    </View>
  );
};

export default Survey6;
