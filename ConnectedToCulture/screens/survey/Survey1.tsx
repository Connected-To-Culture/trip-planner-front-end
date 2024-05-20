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

type Survey1Props = {
  navigation: NavigationProp<any>;
};

const Survey1 = ({navigation}: Survey1Props) => {
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
      selected.q1NG ||
      selected.q1ET ||
      selected.q1TG ||
      selected.q1ZA ||
      selected.q1GH ||
      selected.q1Zambia ||
      (selected.q1Text && selected.q1Text.length > 0);

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
            <SurveyProgressBar progress={9} />
            <Text style={surveyStyles.question}>
              Q1. Which African countries are you interested in visiting?
            </Text>
            <Text style={surveyStyles.subtitle}>(Select all that apply)</Text>

            <View style={surveyStyles.surveyBtnsContainer}>
              <ResuableButton
                alignItems="flex-start"
                backgroundColor={selected.q1NG ? COLORS.primary : COLORS.white}
                borderColor={selected.q1NG ? COLORS.primary : COLORS.black400}
                borderRadius={10}
                borderWidth={1}
                btnText="Nigeria (NG)"
                onPress={() => setSelected({...selected, q1NG: !selected.q1NG})}
                paddingHorizantal={24}
                paddingVertical={13}
                size={16}
                textColor={selected.q1NG ? COLORS.white : COLORS.black}
                width={
                  orientation === 'portrait' ? curWidth * 0.88 : curWidth * 0.7
                }
              />
              <ResuableButton
                alignItems="flex-start"
                backgroundColor={selected.q1ET ? COLORS.primary : COLORS.white}
                borderColor={selected.q1ET ? COLORS.primary : COLORS.black400}
                borderRadius={10}
                borderWidth={1}
                btnText="Ethiopia (ET)"
                onPress={() => setSelected({...selected, q1ET: !selected.q1ET})}
                paddingHorizantal={24}
                paddingVertical={13}
                size={16}
                textColor={selected.q1ET ? COLORS.white : COLORS.black}
                width={
                  orientation === 'portrait' ? curWidth * 0.88 : curWidth * 0.7
                }
              />
              <ResuableButton
                alignItems="flex-start"
                backgroundColor={selected.q1TG ? COLORS.primary : COLORS.white}
                borderColor={selected.q1TG ? COLORS.primary : COLORS.black400}
                borderRadius={10}
                borderWidth={1}
                btnText="Togo (TG)"
                onPress={() => setSelected({...selected, q1TG: !selected.q1TG})}
                paddingHorizantal={24}
                paddingVertical={13}
                size={16}
                textColor={selected.q1TG ? COLORS.white : COLORS.black}
                width={
                  orientation === 'portrait' ? curWidth * 0.88 : curWidth * 0.7
                }
              />
              <ResuableButton
                alignItems="flex-start"
                backgroundColor={selected.q1ZA ? COLORS.primary : COLORS.white}
                borderColor={selected.q1ZA ? COLORS.primary : COLORS.black400}
                borderRadius={10}
                borderWidth={1}
                btnText="South Africa (ZA)"
                onPress={() => setSelected({...selected, q1ZA: !selected.q1ZA})}
                paddingHorizantal={24}
                paddingVertical={13}
                size={16}
                textColor={selected.q1ZA ? COLORS.white : COLORS.black}
                width={
                  orientation === 'portrait' ? curWidth * 0.88 : curWidth * 0.7
                }
              />
              <ResuableButton
                alignItems="flex-start"
                backgroundColor={selected.q1GH ? COLORS.primary : COLORS.white}
                borderColor={selected.q1GH ? COLORS.primary : COLORS.black400}
                borderRadius={10}
                borderWidth={1}
                btnText="Ghana (GH)"
                onPress={() => setSelected({...selected, q1GH: !selected.q1GH})}
                paddingHorizantal={24}
                paddingVertical={13}
                size={16}
                textColor={selected.q1GH ? COLORS.white : COLORS.black}
                width={
                  orientation === 'portrait' ? curWidth * 0.88 : curWidth * 0.7
                }
              />
              <ResuableButton
                alignItems="flex-start"
                backgroundColor={
                  selected.q1Zambia ? COLORS.primary : COLORS.white
                }
                borderColor={
                  selected.q1Zambia ? COLORS.primary : COLORS.black400
                }
                borderRadius={10}
                borderWidth={1}
                btnText="Zambia"
                onPress={() =>
                  setSelected({...selected, q1Zambia: !selected.q1Zambia})
                }
                paddingHorizantal={24}
                paddingVertical={13}
                size={16}
                textColor={selected.q1Zambia ? COLORS.white : COLORS.black}
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
                onChangeText={text => setSelected({...selected, q1Text: text})}
                style={surveyStyles.textInput}
                value={selected.q1Text}
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
              onPress={() => navigation.navigate('SurveyStart')}
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
              onPress={() => navigation.navigate('Survey2')}
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

export default Survey1;
