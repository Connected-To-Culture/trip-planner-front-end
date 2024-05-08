import {View, Text, ScrollView} from 'react-native';
import {Dimensions} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import {NavigationProp} from '@react-navigation/native';
import ResuableButton from '../../components/reusable/reusableButton/ReusableButton';
import COLORS from '../../constants/theme';
import surveyStyles from './survey.style';
import {SurveyDataContext} from '../../context/surveyData';
import SurveyProgressBar from '../../components/survey/SurveyProgressBar';

type Survey3Props = {
  navigation: NavigationProp<any>;
};

const Survey3 = ({navigation}: Survey3Props) => {
  const {selected, setSelected} = useContext(SurveyDataContext);
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
            <SurveyProgressBar progress={27} />
            <Text style={surveyStyles.question}>
              Q3. What are your preferred modes of transportation during travel?
            </Text>
            <Text style={surveyStyles.subtitle}>(Select all that apply)</Text>

            <View style={surveyStyles.surveyBtnsContainer}>
              <ResuableButton
                backgroundColor={
                  selected.airplane ? COLORS.primary : COLORS.white
                }
                borderColor={
                  selected.airplane ? COLORS.primary : COLORS.darkGray
                }
                borderRadius={10}
                borderWidth={1}
                btnText="Airplane"
                onPress={() =>
                  setSelected({...selected, airplane: !selected.airplane})
                }
                paddingHorizantal={24}
                paddingVertical={13}
                size={16}
                textColor={selected.airplane ? COLORS.white : COLORS.black}
                width={
                  orientation === 'portrait' ? curWidth * 0.88 : curWidth * 0.7
                }
              />
              <ResuableButton
                backgroundColor={
                  selected.public ? COLORS.primary : COLORS.white
                }
                borderColor={selected.public ? COLORS.primary : COLORS.darkGray}
                borderRadius={10}
                borderWidth={1}
                btnText="Public transportation (e.g. bus, train)"
                onPress={() =>
                  setSelected({...selected, public: !selected.public})
                }
                paddingHorizantal={24}
                paddingVertical={13}
                size={16}
                textColor={selected.public ? COLORS.white : COLORS.black}
                width={
                  orientation === 'portrait' ? curWidth * 0.88 : curWidth * 0.7
                }
              />
              <ResuableButton
                backgroundColor={selected.car ? COLORS.primary : COLORS.white}
                borderColor={selected.car ? COLORS.primary : COLORS.darkGray}
                borderRadius={10}
                borderWidth={1}
                btnText="Car"
                onPress={() => setSelected({...selected, car: !selected.car})}
                paddingHorizantal={24}
                paddingVertical={13}
                size={16}
                textColor={selected.car ? COLORS.white : COLORS.black}
                width={
                  orientation === 'portrait' ? curWidth * 0.88 : curWidth * 0.7
                }
              />
              <ResuableButton
                backgroundColor={
                  selected.bicycle ? COLORS.primary : COLORS.white
                }
                borderColor={
                  selected.bicycle ? COLORS.primary : COLORS.darkGray
                }
                borderRadius={10}
                borderWidth={1}
                btnText="Bicycle"
                onPress={() =>
                  setSelected({...selected, bicycle: !selected.bicycle})
                }
                paddingHorizantal={24}
                paddingVertical={13}
                size={16}
                textColor={selected.bicycle ? COLORS.white : COLORS.black}
                width={
                  orientation === 'portrait' ? curWidth * 0.88 : curWidth * 0.7
                }
              />
              <ResuableButton
                backgroundColor={
                  selected.notSure ? COLORS.primary : COLORS.white
                }
                borderColor={
                  selected.notSure ? COLORS.primary : COLORS.darkGray
                }
                borderRadius={10}
                borderWidth={1}
                btnText="I'm not sure yet"
                onPress={() =>
                  setSelected({...selected, notSure: !selected.notSure})
                }
                paddingHorizantal={24}
                paddingVertical={13}
                size={16}
                textColor={selected.notSure ? COLORS.white : COLORS.black}
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
    </View>
  );
};

export default Survey3;
