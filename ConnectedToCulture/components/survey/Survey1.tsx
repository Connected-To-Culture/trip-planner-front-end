import {View, Text, TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';
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

  return (
    <View>
      <Text>Q1. Which African countries are you interested in visiting?</Text>
      <Text>(Select all that apply)</Text>
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
        width={390}
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
        width={390}
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
        width={390}
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
        width={390}
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
        width={390}
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
        width={390}
      />

      <Text>Other (please specify):</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={() => {}}
        style={styles.inputWrapper}
        value={''}
      />

      <View>
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
          width={187}
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
          width={187}
        />
      </View>
    </View>
  );
};

export default Survey1;

const styles = StyleSheet.create({
  inputWrapper: {
    borderColor: '#D4D4D4',
    backgroundColor: '#FAF8F8',
    borderWidth: 1,
    height: 37,
    borderRadius: 12,
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 5,
    justifyContent: 'center',
  },
})
