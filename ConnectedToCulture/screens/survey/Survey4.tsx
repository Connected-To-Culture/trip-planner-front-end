/* eslint-disable react-native/no-inline-styles */
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
import Toast from 'react-native-toast-message';

type Survey4Props = {
  navigation: NavigationProp<any>;
};

const Survey4 = ({navigation}: Survey4Props) => {
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
    q4exploreDest: false,
    q4recieveFlightInfo: false,
    q4accessAirportInfo: false,
    q4findAccom: false,
    q4utilizeLangTrans: false,
    q4planActivities: false,
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
      selected.q4exploreDest ||
      selected.q4recieveFlightInfo ||
      selected.q4accessAirportInfo ||
      selected.q4findAccom ||
      selected.q4utilizeLangTrans ||
      selected.q4planActivities ||
      selected.q4noneOfAbove;

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
            <SurveyProgressBar progress={36} />
            <Text style={surveyStyles.question}>
              Q4. How do you prefer to plan your trip activities?
            </Text>
            <Text style={surveyStyles.subtitle}>(Select all that apply)</Text>

            <View style={surveyStyles.surveyBtnsContainer}>
              <ResuableButton
                alignItems="flex-start"
                backgroundColor={
                  selected.q4exploreDest ? COLORS.primary : COLORS.white
                }
                borderColor={
                  selected.q4exploreDest ? COLORS.primary : COLORS.black400
                }
                borderRadius={10}
                borderWidth={1}
                btnText="Explore destination highlights and attractions"
                onPress={() =>
                  setSelected({
                    ...selected,
                    q4noneOfAbove: false,
                    q4exploreDest: !selected.q4exploreDest,
                  })
                }
                paddingHorizantal={24}
                paddingVertical={13}
                size={14}
                textColor={selected.q4exploreDest ? COLORS.white : COLORS.black}
                width={
                  orientation === 'portrait' ? curWidth * 0.88 : curWidth * 0.7
                }
              />
              <ResuableButton
                alignItems="flex-start"
                backgroundColor={
                  selected.q4recieveFlightInfo ? COLORS.primary : COLORS.white
                }
                borderColor={
                  selected.q4recieveFlightInfo
                    ? COLORS.primary
                    : COLORS.black400
                }
                borderRadius={10}
                borderWidth={1}
                btnText="Recieve flight information and track flights"
                onPress={() =>
                  setSelected({
                    ...selected,
                    q4noneOfAbove: false,
                    q4recieveFlightInfo: !selected.q4recieveFlightInfo,
                  })
                }
                paddingHorizantal={24}
                paddingVertical={13}
                size={15}
                textColor={
                  selected.q4recieveFlightInfo ? COLORS.white : COLORS.black
                }
                width={
                  orientation === 'portrait' ? curWidth * 0.88 : curWidth * 0.7
                }
              />
              <ResuableButton
                alignItems="flex-start"
                backgroundColor={
                  selected.q4accessAirportInfo ? COLORS.primary : COLORS.white
                }
                borderColor={
                  selected.q4accessAirportInfo
                    ? COLORS.primary
                    : COLORS.black400
                }
                borderRadius={10}
                borderWidth={1}
                btnText="Access airport information and country arrivals"
                onPress={() =>
                  setSelected({
                    ...selected,
                    q4noneOfAbove: false,
                    q4accessAirportInfo: !selected.q4accessAirportInfo,
                  })
                }
                paddingHorizantal={24}
                paddingVertical={13}
                size={14}
                textColor={
                  selected.q4accessAirportInfo ? COLORS.white : COLORS.black
                }
                width={
                  orientation === 'portrait' ? curWidth * 0.88 : curWidth * 0.7
                }
              />
              <ResuableButton
                alignItems="flex-start"
                backgroundColor={
                  selected.q4findAccom ? COLORS.primary : COLORS.white
                }
                borderColor={
                  selected.q4findAccom ? COLORS.primary : COLORS.black400
                }
                borderRadius={10}
                borderWidth={1}
                btnText="Find accomondations"
                onPress={() =>
                  setSelected({
                    ...selected,
                    q4noneOfAbove: false,
                    q4findAccom: !selected.q4findAccom,
                  })
                }
                paddingHorizantal={24}
                paddingVertical={13}
                size={16}
                textColor={selected.q4findAccom ? COLORS.white : COLORS.black}
                width={
                  orientation === 'portrait' ? curWidth * 0.88 : curWidth * 0.7
                }
              />
              <ResuableButton
                alignItems="flex-start"
                backgroundColor={
                  selected.q4utilizeLangTrans ? COLORS.primary : COLORS.white
                }
                borderColor={
                  selected.q4utilizeLangTrans ? COLORS.primary : COLORS.black400
                }
                borderRadius={10}
                borderWidth={1}
                btnText="Utilize languague translation services"
                onPress={() =>
                  setSelected({
                    ...selected,
                    q4noneOfAbove: false,
                    q4utilizeLangTrans: !selected.q4utilizeLangTrans,
                  })
                }
                paddingHorizantal={24}
                paddingVertical={13}
                size={16}
                textColor={
                  selected.q4utilizeLangTrans ? COLORS.white : COLORS.black
                }
                width={
                  orientation === 'portrait' ? curWidth * 0.88 : curWidth * 0.7
                }
              />
              <ResuableButton
                alignItems="flex-start"
                backgroundColor={
                  selected.q4planActivities ? COLORS.primary : COLORS.white
                }
                borderColor={
                  selected.q4planActivities ? COLORS.primary : COLORS.black400
                }
                borderRadius={10}
                borderWidth={1}
                btnText="Plan activities and events"
                onPress={() =>
                  setSelected({
                    ...selected,
                    q4noneOfAbove: false,
                    q4planActivities: !selected.q4planActivities,
                  })
                }
                paddingHorizantal={24}
                paddingVertical={13}
                size={16}
                textColor={
                  selected.q4planActivities ? COLORS.white : COLORS.black
                }
                width={
                  orientation === 'portrait' ? curWidth * 0.88 : curWidth * 0.7
                }
              />
              <ResuableButton
                alignItems="flex-start"
                backgroundColor={
                  selected.q4noneOfAbove ? COLORS.primary : COLORS.white
                }
                borderColor={
                  selected.q4noneOfAbove ? COLORS.primary : COLORS.black400
                }
                borderRadius={10}
                borderWidth={1}
                btnText="None of the above"
                onPress={() =>
                  setSelected({
                    ...selected,
                    ...deselect,
                    q4noneOfAbove: !selected.q4noneOfAbove,
                  })
                }
                paddingHorizantal={24}
                paddingVertical={13}
                size={16}
                textColor={selected.q4noneOfAbove ? COLORS.white : COLORS.black}
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
              onPress={() => navigation.navigate('Survey3')}
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
              onPress={() => {
                if (disabled) {
                  Toast.show({
                    type: 'error',
                    text1: 'Please select at least ONE option before proceding',
                    visibilityTime: 5000,
                  });
                } else {
                  navigation.navigate('Survey5');
                }
              }}
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

export default Survey4;
