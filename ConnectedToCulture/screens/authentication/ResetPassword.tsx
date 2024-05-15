import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View,Dimensions} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import globalStylesAndRowWithSpace from '../../constants/global.style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import COLORS from '../../constants/theme';
import ReusableText from '../../components/reusable/ReusableText';
import { ReusableButton, WidthSpacer } from '../../components';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './authentication.style';

// Get the dimensions of the screen
const windowHeight = Dimensions.get('window').height;

const ResetPassword = ({navigation}: {navigation: any}) => {
    const { globalStyles, rowWithSpace } = globalStylesAndRowWithSpace;
    const [email, setEmail] = useState('');

    const handleResetPassword = async () => {
    try {
      //await sendPasswordResetEmail(email);
      Alert.alert('Success', 'Reset password e-mail has send.');
    } catch (error) {
      Alert.alert('Error', 'Someting went wrong.');
    }
  };
  return (
    <SafeAreaView style={[globalStyles.container]}>
        <View style={{marginBottom:5}}>
        <View style={rowWithSpace("flex-start")}>
       
         <TouchableOpacity style={styles.box}
          onPress={()=>navigation.navigate('Signin')}
         >
          <FontAwesomeIcon size={24} icon={faArrowLeft} />  
          

         </TouchableOpacity>
         <WidthSpacer width={windowHeight*0.1} />
         <ReusableText
                text={"Reset Password"}
                family={'Poppins'}
                size={24}
                color={COLORS.black}
         />

        </View>
    </View>
    <View style={{margin:windowHeight*0.02}}>
    <View style={styles.textBox}>
    <ReusableText
                text={"Enter the Email associate to your account and we will send a email with instructions to reset your passwords"}
                family={'Poppins'}
                size={12}
                color={COLORS.black}
         />
        
    </View>
    <View style={[styles.wrapper,{margin:windowHeight*0.02,marginBottom:windowHeight*0.04}]}>
    <Text style={styles.textEmail}>Email</Text>
    <TextInput style={styles.inputWrapperRstPassword}
        placeholder="jamescolton@gmail.com"
        placeholderTextColor={'#49454F'}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
    </View>
    <View style={styles.btnWrapper}>
    <ReusableButton 

    btnText='Send'
    textColor={COLORS.white} 
    backgroundColor={COLORS.primary}
    borderWidth={1}
    width={windowHeight*0.4}
    borderColor={COLORS.primary}
    size={16}
    paddingHorizantal={10}
    paddingVertical={10}
    onPress={()=>navigation.navigate('CheckYourEmail')}
    />
    </View>
    <View style={{marginTop:windowHeight*0.04,alignItems:'center'}}>
    <ReusableText
        text='Try Another Way?'
        family={'Poppins'}
        size={12}
        color={'#F2B8B5'}   
        
    />
    </View>
    </View>
    </SafeAreaView>
  )
}

export default ResetPassword

