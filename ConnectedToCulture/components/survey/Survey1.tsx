import {View, Text, TextInput, ScrollView} from 'react-native';
import {Dimensions} from 'react-native';
import React, {useState, useEffect} from 'react';
import {NavigationProp} from '@react-navigation/native';
import ResuableButton from '../reusable/reusableButton/ReusableButton';
import COLORS from '../../constants/theme';
import surveyStyles from './survey.style';

type Survey1Props = {
  navigation: NavigationProp<any>;
};

const Survey1 = ({navigation}: Survey1Props) => {
  const initalSelectedValue = {
    NG: false,
    ET: false,
    TG: false,
    ZA: false,
    GH: false,
    Zambia: false
  }

  const [selected, setSelected] = useState(initalSelectedValue);
  const [textInput, setTextInput] = useState('')
  const [curWidth, setCurWidth] = useState(Dimensions.get('window').width);
  const [orientation, setOrientation] = useState(
    Dimensions.get('window').height > Dimensions.get('window').width
      ? 'portrait'
      : 'landscape'
  );

  useEffect(() => {
    const onChange = () => {
      const {height, width} = Dimensions.get('window');
      setOrientation(height > width ? 'portrait' : 'landscape');
      setCurWidth(width)
    };

    Dimensions.addEventListener('change', onChange);

  }, []);

  return (
    <View style={surveyStyles.container}>
      <ScrollView
        style={{alignSelf: 'center'}}
        showsVerticalScrollIndicator={false}>
        <Text style={surveyStyles.question}>
          Q1. Which African countries are you interested in visiting?
        </Text>
        <Text style={surveyStyles.subtitle}>(Select all that apply)</Text>

        <View style={surveyStyles.surveyBtnsContainer}>
          <ResuableButton
            backgroundColor={selected.NG ? COLORS.primary : COLORS.white}
            borderColor={selected.NG ? COLORS.primary : COLORS.darkGray}
            borderWidth={1}
            btnText="Nigeria (NG)"
            onPress={() => setSelected({...selected, NG: !selected.NG})}
            paddingHorizantal={24}
            paddingVertical={13}
            size={16}
            textColor={selected.NG ? COLORS.white : COLORS.black}
            width={
              orientation === 'portrait' ? curWidth * 0.88 : curWidth * 0.7
            }
          />
          <ResuableButton
            backgroundColor={selected.ET ? COLORS.primary : COLORS.white}
            borderColor={selected.ET ? COLORS.primary : COLORS.darkGray}
            borderWidth={1}
            btnText="Ethiopia (ET)"
            onPress={() => setSelected({...selected, ET: !selected.ET})}
            paddingHorizantal={24}
            paddingVertical={13}
            size={16}
            textColor={selected.ET ? COLORS.white : COLORS.black}
            width={
              orientation === 'portrait' ? curWidth * 0.88 : curWidth * 0.7
            }
          />
          <ResuableButton
            backgroundColor={selected.TG ? COLORS.primary : COLORS.white}
            borderColor={selected.TG ? COLORS.primary : COLORS.darkGray}
            borderWidth={1}
            btnText="Togo (TG)"
            onPress={() => setSelected({...selected, TG: !selected.TG})}
            paddingHorizantal={24}
            paddingVertical={13}
            size={16}
            textColor={selected.TG ? COLORS.white : COLORS.black}
            width={
              orientation === 'portrait' ? curWidth * 0.88 : curWidth * 0.7
            }
          />
          <ResuableButton
            backgroundColor={selected.ZA ? COLORS.primary : COLORS.white}
            borderColor={selected.ZA ? COLORS.primary : COLORS.darkGray}
            borderWidth={1}
            btnText="South Africa (ZA)"
            onPress={() => setSelected({...selected, ZA: !selected.ZA})}
            paddingHorizantal={24}
            paddingVertical={13}
            size={16}
            textColor={selected.ZA ? COLORS.white : COLORS.black}
            width={
              orientation === 'portrait' ? curWidth * 0.88 : curWidth * 0.7
            }
          />
          <ResuableButton
            backgroundColor={selected.GH ? COLORS.primary : COLORS.white}
            borderColor={selected.GH ? COLORS.primary : COLORS.darkGray}
            borderWidth={1}
            btnText="Ghana (GH)"
            onPress={() => setSelected({...selected, GH: !selected.GH})}
            paddingHorizantal={24}
            paddingVertical={13}
            size={16}
            textColor={selected.GH ? COLORS.white : COLORS.black}
            width={
              orientation === 'portrait' ? curWidth * 0.88 : curWidth * 0.7
            }
          />
          <ResuableButton
            backgroundColor={selected.Zambia ? COLORS.primary : COLORS.white}
            borderColor={selected.Zambia ? COLORS.primary : COLORS.darkGray}
            borderWidth={1}
            btnText="Zambia"
            onPress={() => setSelected({...selected, Zambia: !selected.Zambia})}
            paddingHorizantal={24}
            paddingVertical={13}
            size={16}
            textColor={selected.Zambia ? COLORS.white : COLORS.black}
            width={
              orientation === 'portrait' ? curWidth * 0.88 : curWidth * 0.7
            }
          />

          <View style={surveyStyles.specifyOtherContainer}>
            <Text style={surveyStyles.otherText}>Other (please specify):</Text>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={text => setTextInput(text)}
              style={surveyStyles.textInput}
              width={curWidth * 0.5}
              value={textInput}
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
            backgroundColor={COLORS.primary}
            borderColor={COLORS.primary}
            borderWidth={1}
            btnText="Next"
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
      </ScrollView>
    </View>
  );
};

export default Survey1;
