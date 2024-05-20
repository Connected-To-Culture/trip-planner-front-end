import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import COLORS from '../../constants/theme'
import ReusableText from '../reusable/ReusableText'
import { Dimensions } from 'react-native'
import HeightSpacer from '../reusable/HeightSpacer'
import { ReusableButton } from '..'
import styles from './home.style'
import { NavigationProp } from '@react-navigation/native'

const { height, width } = Dimensions.get('window');
interface Props {

  navigation: NavigationProp<any>; // Use NavigationProp

}


const NoTripPlan :React.FC<Props> = ({navigation})  => {


  return (
    <View style={styles.NoTripCompanentContainer}>
      <View style={styles.imageContainer}>
       <Image source={require('../../assets/images/photo/noTripPlan.png')} style={{width:width*0.3,height:height*0.3,resizeMode:'contain'}}/>
      </View>
          <View style={ {justifyContent: 'center',
                        alignItems: 'center',
                        padding: 20,paddingVertical:5}}>
      <Text style={styles.noTripPlanText}>No Trip Plan</Text>
      <HeightSpacer height={height*0.01}/>
      <ReusableText
      text='It seems that your don’t have any trip plan yet. Fill out the survey to explore trips you will definitely be interested!'
      color={COLORS.black}
      family='Almarai'
      size={12}
      lineHeight={14.4}
      align='center'
      />
      </View>
      <View style={styles.ButtonContainer}>
        <ReusableButton
            btnText='Fill Survey Now'
            backgroundColor={COLORS.primary}
            textColor={COLORS.white}
            size={14}
            borderColor={COLORS.primary}
            borderWidth={1}
            width={width*0.3}
            paddingHorizantal={10}
            paddingVertical={5}
            onPress={()=>navigation.navigate('SurveyNavigator')}

        />
      </View>
      <View style={styles.ButtonContainer}>
        <ReusableButton
            btnText='Add A New Trip'
            backgroundColor={COLORS.white}
            textColor={COLORS.primary}
            size={14}
            borderColor={COLORS.primary}
            borderWidth={1}
            width={width*0.3}
            paddingHorizantal={10}
            paddingVertical={5}
            onPress={()=>navigation.navigate('Welcome')}
        />
      </View>
    </View>
  )
}

export default NoTripPlan
