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

type Survey8Props = {
  navigation: NavigationProp<any>;
};

const Survey8 = ({navigation}: Survey8Props) => {
  const {selected, setSelected} = useContext(SurveyDataContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [curWidth, setCurWidth] = useState(Dimensions.get('window').width);
  const [orientation, setOrientation] = useState(
    Dimensions.get('window').height > Dimensions.get('window').width
      ? 'portrait'
      : 'landscape',
  );

  const selectOne = {
    q8_1: false,
    q8_2: false,
    q8_3: false,
    q8_4: false,
    q8_5: false,
    q8PreferNotSay: false,
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
      selected.q8_1 ||
      selected.q8_2 ||
      selected.q8_3 ||
      selected.q8_4 ||
      selected.q8_5 ||
      selected.q8PreferNotSay;

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
            <SurveyProgressBar progress={73} />
            <Text style={surveyStyles.question}>
              Q8. What is your budget range for a typical trip?
            </Text>
            <Text style={surveyStyles.subtitle}>(Select only one)</Text>

            <View style={surveyStyles.surveyBtnsContainer}>
              <ResuableButton
                alignItems="flex-start"
                backgroundColor={selected.q8_1 ? COLORS.primary : COLORS.white}
                borderColor={selected.q8_1 ? COLORS.primary : COLORS.black400}
                borderRadius={10}
                borderWidth={1}
                btnText="$0-$500"
                onPress={() =>
                  setSelected({
                    ...selected,
                    ...selectOne,
                    q8_1: !selected.q8_1,
                  })
                }
                paddingHorizantal={24}
                paddingVertical={13}
                size={16}
                textColor={selected.q8_1 ? COLORS.white : COLORS.black}
                width={
                  orientation === 'portrait' ? curWidth * 0.88 : curWidth * 0.7
                }
              />
              <ResuableButton
                alignItems="flex-start"
                backgroundColor={selected.q8_2 ? COLORS.primary : COLORS.white}
                borderColor={selected.q8_2 ? COLORS.primary : COLORS.black400}
                borderRadius={10}
                borderWidth={1}
                btnText="$500-$1,000"
                onPress={() =>
                  setSelected({
                    ...selected,
                    ...selectOne,
                    q8_2: !selected.q8_2,
                  })
                }
                paddingHorizantal={24}
                paddingVertical={13}
                size={16}
                textColor={selected.q8_2 ? COLORS.white : COLORS.black}
                width={
                  orientation === 'portrait' ? curWidth * 0.88 : curWidth * 0.7
                }
              />
              <ResuableButton
                alignItems="flex-start"
                backgroundColor={selected.q8_3 ? COLORS.primary : COLORS.white}
                borderColor={selected.q8_3 ? COLORS.primary : COLORS.black400}
                borderRadius={10}
                borderWidth={1}
                btnText="$1,000-$1,500"
                onPress={() =>
                  setSelected({
                    ...selected,
                    ...selectOne,
                    q8_3: !selected.q8_3,
                  })
                }
                paddingHorizantal={24}
                paddingVertical={13}
                size={16}
                textColor={selected.q8_3 ? COLORS.white : COLORS.black}
                width={
                  orientation === 'portrait' ? curWidth * 0.88 : curWidth * 0.7
                }
              />
              <ResuableButton
                alignItems="flex-start"
                backgroundColor={selected.q8_4 ? COLORS.primary : COLORS.white}
                borderColor={selected.q8_4 ? COLORS.primary : COLORS.black400}
                borderRadius={10}
                borderWidth={1}
                btnText="$1,500-$2,000"
                onPress={() =>
                  setSelected({
                    ...selected,
                    ...selectOne,
                    q8_4: !selected.q8_4,
                  })
                }
                paddingHorizantal={24}
                paddingVertical={13}
                size={16}
                textColor={selected.q8_4 ? COLORS.white : COLORS.black}
                width={
                  orientation === 'portrait' ? curWidth * 0.88 : curWidth * 0.7
                }
              />
              <ResuableButton
                alignItems="flex-start"
                backgroundColor={selected.q8_5 ? COLORS.primary : COLORS.white}
                borderColor={selected.q8_5 ? COLORS.primary : COLORS.black400}
                borderRadius={10}
                borderWidth={1}
                btnText="$2,000+"
                onPress={() =>
                  setSelected({
                    ...selected,
                    ...selectOne,
                    q8_5: !selected.q8_5,
                  })
                }
                paddingHorizantal={24}
                paddingVertical={13}
                size={16}
                textColor={selected.q8_5 ? COLORS.white : COLORS.black}
                width={
                  orientation === 'portrait' ? curWidth * 0.88 : curWidth * 0.7
                }
              />
              <ResuableButton
                alignItems="flex-start"
                backgroundColor={
                  selected.q8PreferNotSay ? COLORS.primary : COLORS.white
                }
                borderColor={
                  selected.q8PreferNotSay ? COLORS.primary : COLORS.black400
                }
                borderRadius={10}
                borderWidth={1}
                btnText="I prefer not to say"
                onPress={() =>
                  setSelected({
                    ...selected,
                    ...selectOne,
                    q8PreferNotSay: !selected.q8PreferNotSay,
                  })
                }
                paddingHorizantal={24}
                paddingVertical={13}
                size={16}
                textColor={
                  selected.q8PreferNotSay ? COLORS.white : COLORS.black
                }
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
              onPress={() => navigation.navigate('Survey7')}
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
                    text1: 'Please select ONE option before proceding',
                    visibilityTime: 5000,
                  });
                } else {
                  navigation.navigate('Survey9');
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

export default Survey8;
