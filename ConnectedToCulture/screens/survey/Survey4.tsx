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

const Survey4 = ({navigation}: Survey1Props) => {
  const {selected, setSelected} = useContext(SurveyDataContext);
  const [modalOpen, setModalOpen] = useState(false);
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
            <SurveyProgressBar progress={36} />
            <Text style={surveyStyles.question}>
              Q4. How do you prefer to plan your trip activities?
            </Text>
            <Text style={surveyStyles.subtitle}>(Select all that apply)</Text>

            <View style={surveyStyles.surveyBtnsContainer}>
              <ResuableButton
                alignItems="left"
                backgroundColor={
                  selected.exploreDest ? COLORS.primary : COLORS.white
                }
                borderColor={
                  selected.exploreDest ? COLORS.primary : COLORS.black400
                }
                borderRadius={10}
                borderWidth={1}
                btnText="Explore destination highlights and attractions"
                onPress={() =>
                  setSelected({...selected, exploreDest: !selected.exploreDest})
                }
                paddingHorizantal={24}
                paddingVertical={13}
                size={14}
                textColor={selected.exploreDest ? COLORS.white : COLORS.black}
                width={
                  orientation === 'portrait' ? curWidth * 0.88 : curWidth * 0.7
                }
              />
              <ResuableButton
                alignItems="left"
                backgroundColor={
                  selected.recieveFlightInfo ? COLORS.primary : COLORS.white
                }
                borderColor={
                  selected.recieveFlightInfo ? COLORS.primary : COLORS.black400
                }
                borderRadius={10}
                borderWidth={1}
                btnText="Recieve flight information and track flights"
                onPress={() =>
                  setSelected({
                    ...selected,
                    recieveFlightInfo: !selected.recieveFlightInfo,
                  })
                }
                paddingHorizantal={24}
                paddingVertical={13}
                size={15}
                textColor={
                  selected.recieveFlightInfo ? COLORS.white : COLORS.black
                }
                width={
                  orientation === 'portrait' ? curWidth * 0.88 : curWidth * 0.7
                }
              />
              <ResuableButton
                alignItems="left"
                backgroundColor={
                  selected.accessAirportInfo ? COLORS.primary : COLORS.white
                }
                borderColor={
                  selected.accessAirportInfo ? COLORS.primary : COLORS.black400
                }
                borderRadius={10}
                borderWidth={1}
                btnText="Access airport information and country arrivals"
                onPress={() =>
                  setSelected({
                    ...selected,
                    accessAirportInfo: !selected.accessAirportInfo,
                  })
                }
                paddingHorizantal={24}
                paddingVertical={13}
                size={14}
                textColor={
                  selected.accessAirportInfo ? COLORS.white : COLORS.black
                }
                width={
                  orientation === 'portrait' ? curWidth * 0.88 : curWidth * 0.7
                }
              />
              <ResuableButton
                alignItems="left"
                backgroundColor={
                  selected.findAccom ? COLORS.primary : COLORS.white
                }
                borderColor={
                  selected.findAccom ? COLORS.primary : COLORS.black400
                }
                borderRadius={10}
                borderWidth={1}
                btnText="Find accomondations"
                onPress={() =>
                  setSelected({...selected, findAccom: !selected.findAccom})
                }
                paddingHorizantal={24}
                paddingVertical={13}
                size={16}
                textColor={selected.findAccom ? COLORS.white : COLORS.black}
                width={
                  orientation === 'portrait' ? curWidth * 0.88 : curWidth * 0.7
                }
              />
              <ResuableButton
                alignItems="left"
                backgroundColor={
                  selected.utilizeLangTrans ? COLORS.primary : COLORS.white
                }
                borderColor={
                  selected.utilizeLangTrans ? COLORS.primary : COLORS.black400
                }
                borderRadius={10}
                borderWidth={1}
                btnText="Utilize languague translation services"
                onPress={() =>
                  setSelected({
                    ...selected,
                    utilizeLangTrans: !selected.utilizeLangTrans,
                  })
                }
                paddingHorizantal={24}
                paddingVertical={13}
                size={16}
                textColor={
                  selected.utilizeLangTrans ? COLORS.white : COLORS.black
                }
                width={
                  orientation === 'portrait' ? curWidth * 0.88 : curWidth * 0.7
                }
              />
              <ResuableButton
                alignItems="left"
                backgroundColor={
                  selected.planActivities ? COLORS.primary : COLORS.white
                }
                borderColor={
                  selected.planActivities ? COLORS.primary : COLORS.black400
                }
                borderRadius={10}
                borderWidth={1}
                btnText="Plan activities and events"
                onPress={() =>
                  setSelected({
                    ...selected,
                    planActivities: !selected.planActivities,
                  })
                }
                paddingHorizantal={24}
                paddingVertical={13}
                size={16}
                textColor={
                  selected.planActivities ? COLORS.white : COLORS.black
                }
                width={
                  orientation === 'portrait' ? curWidth * 0.88 : curWidth * 0.7
                }
              />
              <ResuableButton
                alignItems="left"
                backgroundColor={
                  selected.noneOfAbove ? COLORS.primary : COLORS.white
                }
                borderColor={
                  selected.noneOfAbove ? COLORS.primary : COLORS.black400
                }
                borderRadius={10}
                borderWidth={1}
                btnText="None of the above"
                onPress={() =>
                  setSelected({...selected, noneOfAbove: !selected.noneOfAbove})
                }
                paddingHorizantal={24}
                paddingVertical={13}
                size={16}
                textColor={selected.noneOfAbove ? COLORS.white : COLORS.black}
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
              backgroundColor={COLORS.primary}
              borderColor={COLORS.primary}
              borderRadius={8}
              borderWidth={1}
              btnText="Next"
              onPress={() => navigation.navigate('Survey5')}
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
