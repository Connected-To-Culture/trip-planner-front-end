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

type Survey10Props = {
  navigation: NavigationProp<any>;
};

const Survey10 = ({navigation}: Survey10Props) => {
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
      selected.q10English ||
      selected.q10French ||
      selected.q10Arabic ||
      selected.q10Spanish ||
      (selected.q10Text && selected.q10Text.length > 0);

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
            <SurveyProgressBar progress={91} />
            <Text style={surveyStyles.question}>
              Q10. What languages do you speak fluently?
            </Text>
            <Text style={surveyStyles.subtitle}>(Select all that apply)</Text>

            <View style={surveyStyles.surveyBtnsContainer}>
              <ResuableButton
                alignItems="flex-start"
                backgroundColor={
                  selected.q10English ? COLORS.primary : COLORS.white
                }
                borderColor={
                  selected.q10English ? COLORS.primary : COLORS.black400
                }
                borderRadius={10}
                borderWidth={1}
                btnText="English"
                onPress={() =>
                  setSelected({...selected, q10English: !selected.q10English})
                }
                paddingHorizantal={24}
                paddingVertical={13}
                size={16}
                textColor={selected.q10English ? COLORS.white : COLORS.black}
                width={
                  orientation === 'portrait' ? curWidth * 0.88 : curWidth * 0.7
                }
              />
              <ResuableButton
                alignItems="flex-start"
                backgroundColor={
                  selected.q10French ? COLORS.primary : COLORS.white
                }
                borderColor={
                  selected.q10French ? COLORS.primary : COLORS.black400
                }
                borderRadius={10}
                borderWidth={1}
                btnText="Franch"
                onPress={() =>
                  setSelected({...selected, q10French: !selected.q10French})
                }
                paddingHorizantal={24}
                paddingVertical={13}
                size={16}
                textColor={selected.q10French ? COLORS.white : COLORS.black}
                width={
                  orientation === 'portrait' ? curWidth * 0.88 : curWidth * 0.7
                }
              />
              <ResuableButton
                alignItems="flex-start"
                backgroundColor={
                  selected.q10Arabic ? COLORS.primary : COLORS.white
                }
                borderColor={
                  selected.q10Arabic ? COLORS.primary : COLORS.black400
                }
                borderRadius={10}
                borderWidth={1}
                btnText="Arabic"
                onPress={() =>
                  setSelected({...selected, q10Arabic: !selected.q10Arabic})
                }
                paddingHorizantal={24}
                paddingVertical={13}
                size={16}
                textColor={selected.q10Arabic ? COLORS.white : COLORS.black}
                width={
                  orientation === 'portrait' ? curWidth * 0.88 : curWidth * 0.7
                }
              />
              <ResuableButton
                alignItems="flex-start"
                backgroundColor={
                  selected.q10Spanish ? COLORS.primary : COLORS.white
                }
                borderColor={
                  selected.q10Spanish ? COLORS.primary : COLORS.black400
                }
                borderRadius={10}
                borderWidth={1}
                btnText="Spanish"
                onPress={() =>
                  setSelected({...selected, q10Spanish: !selected.q10Spanish})
                }
                paddingHorizantal={24}
                paddingVertical={13}
                size={16}
                textColor={selected.q10Spanish ? COLORS.white : COLORS.black}
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
                    setSelected({...selected, q10Text: text})
                  }
                  style={surveyStyles.textInput}
                  width={curWidth * 0.5}
                  value={selected.q10Text}
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
              onPress={() => navigation.navigate('Survey9')}
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
              btnText={disabled ? '🚫' : 'Complete'}
              disabled={disabled}
              onPress={() => navigation.navigate('SurveyEnd')}
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

export default Survey10;
