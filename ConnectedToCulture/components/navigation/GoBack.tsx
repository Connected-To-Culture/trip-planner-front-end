import { View, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import COLORS from '../../constants/theme';
import ReusableText from '../../components/reusable/ReusableText';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import WidthSpacer from '../reusable/WidthSpacer';

const GoBack = ({ navigation, title }: { navigation: any, title: string }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconBox} onPress={() => navigation.goBack()}>
        <FontAwesomeIcon size={24} icon={faArrowLeft} />
      </TouchableOpacity>
      <View style={styles.titleBox}>
      <ReusableText text={title} family={'Poppins'} size={24} color={COLORS.black} />
      </View>
    </View>
  )
}

export default GoBack

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'flex-start',
    
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.white
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleBox:{
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
   
  }
});
