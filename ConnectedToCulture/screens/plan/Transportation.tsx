import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons/faAngleLeft';
import globalStyle from '../../constants/global.style';
import COLORS from '../../constants/theme';

type TransportationProps = {
  navigation: NavigationProp<any>;
};

function Transportation({navigation}: TransportationProps) {
  return (
    <View style={styles.mainTransportaionContainer}>
      <View style={styles.transportationHeader}>
        <TouchableOpacity onPress={() => navigation.navigate('PlanMainPage')}>
          <FontAwesomeIcon icon={faAngleLeft} size={25} />
        </TouchableOpacity>
        <Text style={styles.transportationHeaderText}>Transportaiton</Text>
      </View>

      <View style={styles.roundOneTripContainer}>
        <TouchableOpacity style={styles.roundOneTripButton}>
          <Text style={styles.roundOneText}>Round Trip</Text>
        </TouchableOpacity>
        <View style={styles.roundOneTripBorder} />
        <TouchableOpacity style={styles.roundOneTripButton}>
          <Text style={styles.roundOneText}>One Way</Text>
        </TouchableOpacity>
        <View style={styles.roundOneTripBorder} />
        <TouchableOpacity style={styles.roundOneTripButton}>
          <Text style={styles.roundOneText}>Multi-City</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Transportation;

const styles = StyleSheet.create({
  mainTransportaionContainer: {
    // borderStyle: 'solid',
    // borderColor: 'red',
    // borderWidth: 1,
    flex: 1,
    paddingTop: 30,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,
    backgroundColor: COLORS.white,
  },
  transportationHeader: {
    // borderStyle: 'solid',
    // borderColor: 'black',
    // borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    width: '85%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  transportationHeaderText: {
    fontWeight: 'bold',
    // lineHeight: '120%',
    letterSpacing: 0,
    paddingBottom: 0,
    fontSize: 18,
    color: COLORS.black,
    marginLeft: 'auto',
    flex: 1,
    textAlign: 'center',
    marginStart: -20,
  },
  roundOneTripContainer: {
    borderStyle: 'solid',
    borderColor: COLORS.black400,
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    borderRadius: 50,
    height: 50,
  },
  roundOneTripButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  roundOneText: {
    fontFamily: 'Almarai',
    fontSize: 14,
    color: COLORS.black400,
  },
  roundOneTripBorder: {
    height: '100%',
    width: 1,
    backgroundColor: COLORS.black400,
  },
  shadowUnder: {
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // This is for Android
  },
});
