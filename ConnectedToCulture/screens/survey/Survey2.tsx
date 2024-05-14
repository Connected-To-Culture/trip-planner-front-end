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

type Survey2Props = {
  navigation: NavigationProp<any>;
};

const Survey2 = ({navigation}: Survey2Props) => {
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
            <SurveyProgressBar progress={18} />
            <Text style={surveyStyles.question}>
              Q2. What are your main interests when traveling to Africa?
            </Text>
            <Text style={surveyStyles.subtitle}>(Select all that apply)</Text>

            <View style={surveyStyles.surveyBtnsContainer}>
              <ResuableButton
                alignItems="left"
                backgroundColor={
                  selected.wildlife ? COLORS.primary : COLORS.white
                }
                borderColor={
                  selected.wildlife ? COLORS.primary : COLORS.black400
                }
                borderRadius={10}
                borderWidth={1}
                btnText="Wildlife safari"
                onPress={() =>
                  setSelected({...selected, wildlife: !selected.wildlife})
                }
                paddingHorizantal={24}
                paddingVertical={13}
                size={16}
                textColor={selected.wildlife ? COLORS.white : COLORS.black}
                width={
                  orientation === 'portrait' ? curWidth * 0.88 : curWidth * 0.7
                }
              />
              <ResuableButton
                alignItems="left"
                backgroundColor={
                  selected.historical ? COLORS.primary : COLORS.white
                }
                borderColor={
                  selected.historical ? COLORS.primary : COLORS.black400
                }
                borderRadius={10}
                borderWidth={1}
                btnText="Historical sites"
                onPress={() =>
                  setSelected({...selected, historical: !selected.historical})
                }
                paddingHorizantal={24}
                paddingVertical={13}
                size={16}
                textColor={selected.historical ? COLORS.white : COLORS.black}
                width={
                  orientation === 'portrait' ? curWidth * 0.88 : curWidth * 0.7
                }
              />
              <ResuableButton
                alignItems="left"
                backgroundColor={
                  selected.cultural ? COLORS.primary : COLORS.white
                }
                borderColor={
                  selected.cultural ? COLORS.primary : COLORS.black400
                }
                borderRadius={10}
                borderWidth={1}
                btnText="Cultural experiences"
                onPress={() =>
                  setSelected({...selected, cultural: !selected.cultural})
                }
                paddingHorizantal={24}
                paddingVertical={13}
                size={16}
                textColor={selected.cultural ? COLORS.white : COLORS.black}
                width={
                  orientation === 'portrait' ? curWidth * 0.88 : curWidth * 0.7
                }
              />
              <ResuableButton
                alignItems="left"
                backgroundColor={
                  selected.adventure ? COLORS.primary : COLORS.white
                }
                borderColor={
                  selected.adventure ? COLORS.primary : COLORS.black400
                }
                borderRadius={10}
                borderWidth={1}
                btnText="Adventure activities (e.g., hiking, rafting)"
                onPress={() =>
                  setSelected({...selected, adventure: !selected.adventure})
                }
                paddingHorizantal={24}
                paddingVertical={13}
                size={16}
                textColor={selected.adventure ? COLORS.white : COLORS.black}
                width={
                  orientation === 'portrait' ? curWidth * 0.88 : curWidth * 0.7
                }
              />
              <ResuableButton
                alignItems="left"
                backgroundColor={selected.food ? COLORS.primary : COLORS.white}
                borderColor={selected.food ? COLORS.primary : COLORS.black400}
                borderRadius={10}
                borderWidth={1}
                btnText="Food and culinary experiences"
                onPress={() => setSelected({...selected, food: !selected.food})}
                paddingHorizantal={24}
                paddingVertical={13}
                size={16}
                textColor={selected.food ? COLORS.white : COLORS.black}
                width={
                  orientation === 'portrait' ? curWidth * 0.88 : curWidth * 0.7
                }
              />
              <ResuableButton
                alignItems="left"
                backgroundColor={
                  selected.entertainment ? COLORS.primary : COLORS.white
                }
                borderColor={
                  selected.entertainment ? COLORS.primary : COLORS.black400
                }
                borderRadius={10}
                borderWidth={1}
                btnText="Entertainment (e.g. nightlife, concert)"
                onPress={() =>
                  setSelected({
                    ...selected,
                    entertainment: !selected.entertainment,
                  })
                }
                paddingHorizantal={24}
                paddingVertical={13}
                size={16}
                textColor={selected.entertainment ? COLORS.white : COLORS.black}
                width={
                  orientation === 'portrait' ? curWidth * 0.88 : curWidth * 0.7
                }
              />

              <View style={surveyStyles.specifyOtherContainer}>
                <Text style={surveyStyles.otherText}>
                  Other (please specify):
                </Text>
                <TextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={text =>
                    setSelected({...selected, q2Text: text})
                  }
                  style={surveyStyles.textInput}
                  width={curWidth * 0.5}
                  value={selected.q2Text}
                />
              </View>
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
              onPress={() => navigation.navigate('Survey1')}
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
              onPress={() => navigation.navigate('Survey3')}
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

export default Survey2;
