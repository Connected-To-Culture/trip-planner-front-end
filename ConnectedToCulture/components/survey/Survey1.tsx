import {View, Text, TextInput, StyleSheet, ScrollView} from 'react-native';
import {Dimensions} from 'react-native';
import React, {useState, useEffect} from 'react';
import {NavigationProp} from '@react-navigation/native';
import ResuableButton from '../reusable/reusableButton/ReusableButton';
import COLORS from '../../constants/theme';

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
  const [orientation, setOrientation] = useState(
    Dimensions.get('window').height > Dimensions.get('window').width
      ? 'portrait'
      : 'landscape'
  );

  useEffect(() => {
    const onChange = () => {
      const {height, width} = Dimensions.get('window');
      setOrientation(height > width ? 'portrait' : 'landscape');
    };

    Dimensions.addEventListener('change', onChange);

  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={{alignSelf: 'center'}}>
        <Text style={styles.question}>
          Q1. Which African countries are you interested in visiting?
        </Text>
        <Text style={styles.subtitle}>(Select all that apply)</Text>

        <View style={styles.surveyBtnsContainer}>
          <ResuableButton
            backgroundColor={selected.NG ? COLORS.darkGray : COLORS.white}
            borderColor={COLORS.lightGray}
            borderWidth={1}
            btnText="Nigeria (NG)"
            onPress={() => setSelected({...selected, NG: !selected.NG})}
            paddingHorizantal={24}
            paddingVertical={13}
            size={16}
            textColor={selected.NG ? COLORS.white : COLORS.black}
            width={
              orientation === 'portrait'
                ? 350
                : Dimensions.get('window').width * 0.7
            }
          />
          <ResuableButton
            backgroundColor={selected.ET ? COLORS.darkGray : COLORS.white}
            borderColor={COLORS.lightGray}
            borderWidth={1}
            btnText="Ethiopia (ET)"
            onPress={() => setSelected({...selected, ET: !selected.ET})}
            paddingHorizantal={24}
            paddingVertical={13}
            size={16}
            textColor={selected.ET ? COLORS.white : COLORS.black}
            width={
              orientation === 'portrait'
                ? 350
                : Dimensions.get('window').width * 0.7
            }
          />
          <ResuableButton
            backgroundColor={selected.TG ? COLORS.darkGray : COLORS.white}
            borderColor={COLORS.lightGray}
            borderWidth={1}
            btnText="Togo (TG)"
            onPress={() => setSelected({...selected, TG: !selected.TG})}
            paddingHorizantal={24}
            paddingVertical={13}
            size={16}
            textColor={selected.TG ? COLORS.white : COLORS.black}
            width={
              orientation === 'portrait'
                ? 350
                : Dimensions.get('window').width * 0.7
            }
          />
          <ResuableButton
            backgroundColor={selected.ZA ? COLORS.darkGray : COLORS.white}
            borderColor={COLORS.lightGray}
            borderWidth={1}
            btnText="South Africa (ZA)"
            onPress={() => setSelected({...selected, ZA: !selected.ZA})}
            paddingHorizantal={24}
            paddingVertical={13}
            size={16}
            textColor={selected.ZA ? COLORS.white : COLORS.black}
            width={
              orientation === 'portrait'
                ? 350
                : Dimensions.get('window').width * 0.7
            }
          />
          <ResuableButton
            backgroundColor={selected.GH ? COLORS.darkGray : COLORS.white}
            borderColor={COLORS.lightGray}
            borderWidth={1}
            btnText="Ghana (GH)"
            onPress={() => setSelected({...selected, GH: !selected.GH})}
            paddingHorizantal={24}
            paddingVertical={13}
            size={16}
            textColor={selected.GH ? COLORS.white : COLORS.black}
            width={
              orientation === 'portrait'
                ? 350
                : Dimensions.get('window').width * 0.7
            }
          />
          <ResuableButton
            backgroundColor={selected.Zambia ? COLORS.darkGray : COLORS.white}
            borderColor={COLORS.lightGray}
            borderWidth={1}
            btnText="Zambia"
            onPress={() => setSelected({...selected, Zambia: !selected.Zambia})}
            paddingHorizantal={24}
            paddingVertical={13}
            size={16}
            textColor={selected.Zambia ? COLORS.white : COLORS.black}
            width={
              orientation === 'portrait'
                ? 350
                : Dimensions.get('window').width * 0.7
            }
          />

          <View style={styles.specifyOtherContainer}>
            <Text style={styles.otherText}>Other (please specify):</Text>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={() => {}}
              style={styles.textInput}
              width={
                orientation === 'portrait'
                  ? 200
                  : Dimensions.get('window').width * 0.5
              }
              value={''}
            />
          </View>
        </View>

        <View
          style={
            orientation === 'portrait'
              ? styles.backNextBtnContainer
              : styles.backNextBtnContainerLandscape
          }>
          <ResuableButton
            backgroundColor={COLORS.white}
            borderColor={COLORS.lightGray}
            borderWidth={1}
            btnText="Back"
            onPress={() => navigation.navigate('SurveyStart')}
            paddingHorizantal={16}
            paddingVertical={8}
            size={16}
            textColor={COLORS.black}
            width={orientation === 'portrait' ? 170 : 250}
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
            width={orientation === 'portrait' ? 170 : 250}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Survey1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  textInput: {
    backgroundColor: '#CECECE',
    borderColor: '#CECECE',
    borderRadius: 10,
    borderWidth: 1,
    height: 38,
    paddingLeft: 10,
  },
  surveyBtnsContainer: {
    display: 'flex',
    gap: 10,
    justifyContent: 'center'
  },
  question: {
    color: COLORS.black,
    fontFamily: 'Almarai',
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 0,
    lineHeight: 24,
    paddingBottom: 0,
  },
  subtitle: {
    color: COLORS.darkGray,
    fontFamily: 'Almarai',
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 19.2,
    marginBottom: 16,
    paddingBottom: 0,
  },
  specifyOtherContainer: {
    alignItems: 'center',
    display: 'flex',
    gap: 10,
    flexDirection: 'row',
    marginTop: 10
  },
  otherText: {
    color: COLORS.black,
    fontFamily: 'Almarai',
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 19.2,
    paddingBottom: 0,
  },
  backNextBtnContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    marginTop: 100,
  },
  backNextBtnContainerLandscape: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    marginTop: 70,
  }
})
