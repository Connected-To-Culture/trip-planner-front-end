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

type Survey3Props = {
  navigation: NavigationProp<any>;
};

const Survey3 = ({navigation}: Survey3Props) => {
  const {selected, setSelected} = useContext(SurveyDataContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [curWidth, setCurWidth] = useState(Dimensions.get('window').width);
  const [orientation, setOrientation] = useState(
    Dimensions.get('window').height > Dimensions.get('window').width
      ? 'portrait'
      : 'landscape',
  );

  const deselect = {
    q3airplane: false,
    q3public: false,
    q3car: false,
    q3bicycle: false,
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
            <SurveyProgressBar progress={27} />
            <Text style={surveyStyles.question}>
              Q3. What are your preferred modes of transportation during travel?
            </Text>
            <Text style={surveyStyles.subtitle}>(Select all that apply)</Text>

            <View style={surveyStyles.surveyBtnsContainer}>
              <ResuableButton
                alignItems="left"
                backgroundColor={
                  selected.q3airplane ? COLORS.primary : COLORS.white
                }
                borderColor={
                  selected.q3airplane ? COLORS.primary : COLORS.black400
                }
                borderRadius={10}
                borderWidth={1}
                btnText="Airplane"
                onPress={() =>
                  setSelected({
                    ...selected,
                    q3notSure: false,
                    q3airplane: !selected.q3airplane,
                  })
                }
                paddingHorizantal={24}
                paddingVertical={13}
                size={16}
                textColor={selected.q3airplane ? COLORS.white : COLORS.black}
                width={
                  orientation === 'portrait' ? curWidth * 0.88 : curWidth * 0.7
                }
              />
              <ResuableButton
                alignItems="left"
                backgroundColor={
                  selected.q3public ? COLORS.primary : COLORS.white
                }
                borderColor={
                  selected.q3public ? COLORS.primary : COLORS.black400
                }
                borderRadius={10}
                borderWidth={1}
                btnText="Public transportation (e.g. bus, train)"
                onPress={() =>
                  setSelected({
                    ...selected,
                    q3notSure: false,
                    q3public: !selected.q3public,
                  })
                }
                paddingHorizantal={24}
                paddingVertical={13}
                size={16}
                textColor={selected.q3public ? COLORS.white : COLORS.black}
                width={
                  orientation === 'portrait' ? curWidth * 0.88 : curWidth * 0.7
                }
              />
              <ResuableButton
                alignItems="left"
                backgroundColor={selected.q3car ? COLORS.primary : COLORS.white}
                borderColor={selected.q3car ? COLORS.primary : COLORS.black400}
                borderRadius={10}
                borderWidth={1}
                btnText="Car"
                onPress={() =>
                  setSelected({
                    ...selected,
                    q3notSure: false,
                    q3car: !selected.q3car,
                  })
                }
                paddingHorizantal={24}
                paddingVertical={13}
                size={16}
                textColor={selected.q3car ? COLORS.white : COLORS.black}
                width={
                  orientation === 'portrait' ? curWidth * 0.88 : curWidth * 0.7
                }
              />
              <ResuableButton
                alignItems="left"
                backgroundColor={
                  selected.q3bicycle ? COLORS.primary : COLORS.white
                }
                borderColor={
                  selected.q3bicycle ? COLORS.primary : COLORS.black400
                }
                borderRadius={10}
                borderWidth={1}
                btnText="Bicycle"
                onPress={() =>
                  setSelected({
                    ...selected,
                    q3notSure: false,
                    q3bicycle: !selected.q3bicycle,
                  })
                }
                paddingHorizantal={24}
                paddingVertical={13}
                size={16}
                textColor={selected.q3bicycle ? COLORS.white : COLORS.black}
                width={
                  orientation === 'portrait' ? curWidth * 0.88 : curWidth * 0.7
                }
              />
              <ResuableButton
                alignItems="left"
                backgroundColor={
                  selected.q3notSure ? COLORS.primary : COLORS.white
                }
                borderColor={
                  selected.q3notSure ? COLORS.primary : COLORS.black400
                }
                borderRadius={10}
                borderWidth={1}
                btnText="I'm not sure yet"
                onPress={() =>
                  setSelected({
                    ...selected,
                    ...deselect,
                    q3notSure: !selected.q3notSure,
                  })
                }
                paddingHorizantal={24}
                paddingVertical={13}
                size={16}
                textColor={selected.q3notSure ? COLORS.white : COLORS.black}
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
              onPress={() => navigation.navigate('Survey2')}
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
              onPress={() => navigation.navigate('Survey4')}
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

export default Survey3;
