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

type Survey7Props = {
  navigation: NavigationProp<any>;
};

const Survey7 = ({navigation}: Survey7Props) => {
  const {selected, setSelected} = useContext(SurveyDataContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [curWidth, setCurWidth] = useState(Dimensions.get('window').width);
  const [orientation, setOrientation] = useState(
    Dimensions.get('window').height > Dimensions.get('window').width
      ? 'portrait'
      : 'landscape',
  );

  const selectOne = {
    q7LessThanWeek: false,
    q7_1_2Weeks: false,
    q7_1_3Months: false,
    q7_3MonthsToYear: false,
    q7MoreThanYear: false,
  };

  useEffect(() => {
    const onChange = () => {
      const {height, width} = Dimensions.get('window');
      setOrientation(height > width ? 'portrait' : 'landscape');
      setCurWidth(width);
    };
    Dimensions.addEventListener('change', onChange);
  }, []);

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
            <SurveyProgressBar progress={64} />
            <Text style={surveyStyles.question}>
              Q7. How long do you typically plan your trips in advance?
            </Text>
            {/* <Text style={surveyStyles.subtitle}>(Select all that apply)</Text> */}

            <View style={surveyStyles.surveyBtnsContainer}>
              <ResuableButton
                alignItems="left"
                backgroundColor={
                  selected.q7LessThanWeek ? COLORS.primary : COLORS.white
                }
                borderColor={
                  selected.q7LessThanWeek ? COLORS.primary : COLORS.black400
                }
                borderRadius={10}
                borderWidth={1}
                btnText="Less than a week"
                onPress={() =>
                  setSelected({
                    ...selected,
                    ...selectOne,
                    q7LessThanWeek: !selected.q7LessThanWeek,
                  })
                }
                paddingHorizantal={24}
                paddingVertical={13}
                size={16}
                textColor={
                  selected.q7LessThanWeek ? COLORS.white : COLORS.black
                }
                width={
                  orientation === 'portrait' ? curWidth * 0.88 : curWidth * 0.7
                }
              />
              <ResuableButton
                alignItems="left"
                backgroundColor={
                  selected.q7_1_2Weeks ? COLORS.primary : COLORS.white
                }
                borderColor={
                  selected.q7_1_2Weeks ? COLORS.primary : COLORS.black400
                }
                borderRadius={10}
                borderWidth={1}
                btnText="1-2 weeks"
                onPress={() =>
                  setSelected({
                    ...selected,
                    ...selectOne,
                    q7_1_2Weeks: !selected.q7_1_2Weeks,
                  })
                }
                paddingHorizantal={24}
                paddingVertical={13}
                size={16}
                textColor={selected.q7_1_2Weeks ? COLORS.white : COLORS.black}
                width={
                  orientation === 'portrait' ? curWidth * 0.88 : curWidth * 0.7
                }
              />
              <ResuableButton
                alignItems="left"
                backgroundColor={
                  selected.q7_1_3Months ? COLORS.primary : COLORS.white
                }
                borderColor={
                  selected.q7_1_3Months ? COLORS.primary : COLORS.black400
                }
                borderRadius={10}
                borderWidth={1}
                btnText="1-3 months"
                onPress={() =>
                  setSelected({
                    ...selected,
                    ...selectOne,
                    q7_1_3Months: !selected.q7_1_3Months,
                  })
                }
                paddingHorizantal={24}
                paddingVertical={13}
                size={16}
                textColor={selected.q7_1_3Months ? COLORS.white : COLORS.black}
                width={
                  orientation === 'portrait' ? curWidth * 0.88 : curWidth * 0.7
                }
              />
              <ResuableButton
                alignItems="left"
                backgroundColor={
                  selected.q7_3MonthsToYear ? COLORS.primary : COLORS.white
                }
                borderColor={
                  selected.q7_3MonthsToYear ? COLORS.primary : COLORS.black400
                }
                borderRadius={10}
                borderWidth={1}
                btnText="3 months to a year"
                onPress={() =>
                  setSelected({
                    ...selected,
                    ...selectOne,
                    q7_3MonthsToYear: !selected.q7_3MonthsToYear,
                  })
                }
                paddingHorizantal={24}
                paddingVertical={13}
                size={16}
                textColor={
                  selected.q7_3MonthsToYear ? COLORS.white : COLORS.black
                }
                width={
                  orientation === 'portrait' ? curWidth * 0.88 : curWidth * 0.7
                }
              />
              <ResuableButton
                alignItems="left"
                backgroundColor={
                  selected.q7MoreThanYear ? COLORS.primary : COLORS.white
                }
                borderColor={
                  selected.q7MoreThanYear ? COLORS.primary : COLORS.black400
                }
                borderRadius={10}
                borderWidth={1}
                btnText="More than a year"
                onPress={() =>
                  setSelected({
                    ...selected,
                    ...selectOne,
                    q7MoreThanYear: !selected.q7MoreThanYear,
                  })
                }
                paddingHorizantal={24}
                paddingVertical={13}
                size={16}
                textColor={
                  selected.q7MoreThanYear ? COLORS.white : COLORS.black
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
              onPress={() => navigation.navigate('Survey6')}
              paddingHorizantal={16}
              paddingVertical={8}
              size={16}
              textColor={COLORS.primary}
              width={
                orientation === 'portrait' ? curWidth * 0.42 : curWidth * 0.34
              }
            />
            <ResuableButton
              backgroundColor={COLORS.primary}
              borderColor={COLORS.primary}
              borderRadius={8}
              borderWidth={1}
              btnText="Next"
              onPress={() => navigation.navigate('Survey8')}
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

export default Survey7;
