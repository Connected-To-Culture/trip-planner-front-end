import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import { GoBack, HeightSpacer, ReusableButton } from '../../components';
import Svg, { Path } from 'react-native-svg';
import COLORS from '../../constants/theme';
import ReusableText from '../../components/reusable/ReusableText';

// Get the dimensions of the screen
const { height, width } = Dimensions.get('window');

const CheckYourEmail = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{backgroundColor:COLORS.white}}> 
      <GoBack title='Check Your Email' navigation={navigation} />
      <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Svg width={48} height={48} viewBox="0 0 24 24" fill='none'>
          <Path
            d="M2 8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5H7"
            stroke="#0E7070"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            opacity={0.4}
            d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
            stroke="#0E7070"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            opacity={0.4}
            d="M2 16.5H8"
            stroke="#0E7070"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            opacity={0.4}
            d="M2 12.5H5"
            stroke="#0E7070"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      </View>
      <View style={styles.textBox}>
      <ReusableText
        text='We have sent a password recover link to your E-mail, please go to give a check'
        family={'Poppins'}
        size={12}
        color={'#201A1B'}   
        lineHeight={16}
        align={'center'}
        
    />
      </View>
      <View>
      <ReusableButton onPress={()=>navigation.navigate('CreateNewPassword')}
                 btnText='Open Email App' 
                 width={'100%'}
                 textColor={COLORS.white}
                 size={14}
                 backgroundColor={COLORS.primary}
                 borderWidth={1}
                 borderColor={COLORS.primary}
                 paddingHorizantal={50}
                 paddingVertical={10}
                 />
      </View>
      <View style={styles.textBox}>
        <TouchableOpacity onPress={()=>navigation.navigate('Welcome')}>
      <ReusableText
        text='Skip, I will check it later'
        family={'Poppins'}
        size={12}
        color={'#4A4458'}   
        lineHeight={16}
        align={'center'}
        
    />
    </TouchableOpacity>
      </View>
      <HeightSpacer height={500}/>
    </View>
   </View>
  );
};

export default CheckYourEmail;

const styles = StyleSheet.create({
  container:{
    
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop:height * 0.1,
    
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.24,
    height: height * 0.12,
    backgroundColor:'rgba(14, 112, 112, 0.05)',
    borderRadius:16,
    marginBottom:0,
  },
  textBox:{
    marginHorizontal:70,
    marginVertical:50
  },
});
