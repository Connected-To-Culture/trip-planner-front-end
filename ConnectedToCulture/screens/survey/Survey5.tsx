import {View, Text, TextInput, ScrollView, Pressable} from 'react-native';
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

type Survey5Props = {
  navigation: NavigationProp<any>;
};

const Survey5 = ({navigation}: Survey5Props) => {
  const {selected, setSelected} = useContext(SurveyDataContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [curWidth, setCurWidth] = useState(Dimensions.get('window').width);
  const [orientation, setOrientation] = useState(
    Dimensions.get('window').height > Dimensions.get('window').width
      ? 'portrait'
      : 'landscape',
  );

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
      selected.q5FlightAirportInfo ||
      selected.q5AccomOptions ||
      selected.q5Weather ||
      selected.q5ActivityRecs ||
      selected.q5LangTrans ||
      (selected.q5Text && selected.q5Text.length > 0);

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
            <SurveyProgressBar progress={45} />
            <Text style={surveyStyles.question}>
              Q5. Which types of information would you like to access while
              planning your trip?
            </Text>
            <Text style={surveyStyles.subtitle}>(Select all that apply)</Text>

            <View style={surveyStyles.surveyBtnsContainer}>
              <ResuableButton
                alignItems="flex-start"
                backgroundColor={
                  selected.q5FlightAirportInfo ? COLORS.primary : COLORS.white
                }
                borderColor={
                  selected.q5FlightAirportInfo
                    ? COLORS.primary
                    : COLORS.black400
                }
                borderRadius={10}
                borderWidth={1}
                btnText="Flight and Airport Information"
                onPress={() =>
                  setSelected({
                    ...selected,
                    q5FlightAirportInfo: !selected.q5FlightAirportInfo,
                  })
                }
                paddingHorizantal={24}
                paddingVertical={13}
                size={16}
                textColor={
                  selected.q5FlightAirportInfo ? COLORS.white : COLORS.black
                }
                width={
                  orientation === 'portrait' ? curWidth * 0.88 : curWidth * 0.7
                }
              />
              <ResuableButton
                alignItems="flex-start"
                backgroundColor={
                  selected.q5AccomOptions ? COLORS.primary : COLORS.white
                }
                borderColor={
                  selected.q5AccomOptions ? COLORS.primary : COLORS.black400
                }
                borderRadius={10}
                borderWidth={1}
                btnText="Accommodation Options"
                onPress={() =>
                  setSelected({
                    ...selected,
                    q5AccomOptions: !selected.q5AccomOptions,
                  })
                }
                paddingHorizantal={24}
                paddingVertical={13}
                size={16}
                textColor={
                  selected.q5AccomOptions ? COLORS.white : COLORS.black
                }
                width={
                  orientation === 'portrait' ? curWidth * 0.88 : curWidth * 0.7
                }
              />
              <ResuableButton
                alignItems="flex-start"
                backgroundColor={
                  selected.q5Weather ? COLORS.primary : COLORS.white
                }
                borderColor={
                  selected.q5Weather ? COLORS.primary : COLORS.black400
                }
                borderRadius={10}
                borderWidth={1}
                btnText="Weather Updates and Forecasts"
                onPress={() =>
                  setSelected({...selected, q5Weather: !selected.q5Weather})
                }
                paddingHorizantal={24}
                paddingVertical={13}
                size={16}
                textColor={selected.q5Weather ? COLORS.white : COLORS.black}
                width={
                  orientation === 'portrait' ? curWidth * 0.88 : curWidth * 0.7
                }
              />
              <ResuableButton
                alignItems="flex-start"
                backgroundColor={
                  selected.q5ActivityRecs ? COLORS.primary : COLORS.white
                }
                borderColor={
                  selected.q5ActivityRecs ? COLORS.primary : COLORS.black400
                }
                borderRadius={10}
                borderWidth={1}
                btnText="Activity Recommendations"
                onPress={() =>
                  setSelected({
                    ...selected,
                    q5ActivityRecs: !selected.q5ActivityRecs,
                  })
                }
                paddingHorizantal={24}
                paddingVertical={13}
                size={16}
                textColor={
                  selected.q5ActivityRecs ? COLORS.white : COLORS.black
                }
                width={
                  orientation === 'portrait' ? curWidth * 0.88 : curWidth * 0.7
                }
              />
              <ResuableButton
                alignItems="flex-start"
                backgroundColor={
                  selected.q5LangTrans ? COLORS.primary : COLORS.white
                }
                borderColor={
                  selected.q5LangTrans ? COLORS.primary : COLORS.black400
                }
                borderRadius={10}
                borderWidth={1}
                btnText="Language Translation Services"
                onPress={() =>
                  setSelected({...selected, q5LangTrans: !selected.q5LangTrans})
                }
                paddingHorizantal={24}
                paddingVertical={13}
                size={16}
                textColor={selected.q5LangTrans ? COLORS.white : COLORS.black}
                width={
                  orientation === 'portrait' ? curWidth * 0.88 : curWidth * 0.7
                }
              />
            </View>

            <View style={surveyStyles.specifyOtherContainer}>
              <Text style={surveyStyles.otherText}>
                Other (please specify):
              </Text>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={text => setSelected({...selected, q5Text: text})}
                style={surveyStyles.textInput}
                value={selected.q5Text}
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
              onPress={() => navigation.navigate('Survey4')}
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
                    text2: 'Or type something in the "Other" input field',
                    visibilityTime: 5000,
                  });
                } else {
                  navigation.navigate('Survey6');
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

export default Survey5;
