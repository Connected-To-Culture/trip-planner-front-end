import { Alert, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { GoBack, ReusableButton } from '../../components'
import COLORS from '../../constants/theme'
import globalStyle from '../../constants/global.style'
import ReusableText from '../../components/reusable/ReusableText'
import { TextInput } from 'react-native'
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
// Get the dimensions of the screen
const { height, width } = Dimensions.get('window');

interface FormModel{
  password:string,
  verifyPassword:string,
}
const validationSchema=Yup.object().shape({
 
  password:Yup.string()
  .min(8, 'Password must be 8 characters long')
  .matches(/[0-9]/, 'Password requires a number')
  .matches(/[a-z]/, 'Password requires a lowercase letter')
  .matches(/[A-Z]/, 'Password requires an uppercase letter')
  .matches(/[^\w]/, 'Password requires a symbol')
  .required('Required'),
  verifyPassword:Yup.string()
  .oneOf([Yup.ref('password'), ""], 'Must match "password" field value')
  
})


const CreateNewPassword = ({navigation}:{navigation:any}) => {

  const handleSubmit =  (values: FormModel, { resetForm, setSubmitting }: FormikHelpers<FormModel>) => {
       
    console.log("handleSubmit called");
    console.log("Navigation object:", navigation);
    navigation.navigate('CheckYourEmail');
    resetForm();
    setSubmitting(false);
  
  };
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isVerifyPasswordVisible, setIsVerifyPasswordVisible] = useState(false);
  
  const togglePasswordVisibility = (field: string) => {
    if (field === 'password') {
      setIsPasswordVisible(!isPasswordVisible);
    } else if (field === 'verifyPassword') {
      setIsVerifyPasswordVisible(!isVerifyPasswordVisible);
    }
  };
  return (
    <View style={globalStyle.globalStyles.container}>
      <GoBack   title='Create New Password' navigation={navigation} />
      <View style={styles.container}>
      <View style={styles.textBox}>
      <ReusableText
        text='You new password should different from your previous password.'
        family={'Poppins'}
        size={12}
        color={'#201A1B'}   
        lineHeight={16}
        align={'justify'}
        
    />
      </View>
      <Formik<FormModel>
        initialValues={{
            password:'',
            verifyPassword:'',

    }}
    validationSchema={validationSchema}
    onSubmit={handleSubmit}>
    {({  handleChange,
          touched,
          handleSubmit,
          values,
          errors,
          isValid,
          setFieldTouched})=>(    
        <>
      <View style={{paddingBottom:40}}>
            <View style={styles.labelContainer}>
            <ReusableText
              text='Password'
              family={'Poppins'}
              size={12}
              color={'#49454F'}   
              lineHeight={16}
              align={'center'}
        
            />
            </View>
           
            <View style={styles.inputContainer}>
              
                <TextInput style={styles.TextInput} placeholder="password"  placeholderTextColor={'#79796E'}
                onFocus={()=>setFieldTouched('password')}
                onBlur={()=>setFieldTouched('password')}
                value={values.password}
                onChangeText={handleChange('password')}
                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry={!isPasswordVisible}/>
           <TouchableOpacity 
                style={styles.visibilityButton} 
                onPress={() => togglePasswordVisibility('password')}>
                <FontAwesomeIcon icon={isPasswordVisible ? faEye : faEyeSlash} size={20} color="black" />
            </TouchableOpacity>
        
           </View>
            
            {touched.password && errors.password && (
                <Text style={styles.errorMessage}>{errors.password}</Text>
                )}
        </View>
        <View>
            <View style={styles.labelContainer}>
            <ReusableText
              text='Confirm Password'
              family={'Poppins'}
              size={12}
              color={'#49454F'}   
              lineHeight={16}
              align={'center'}
        
            />
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.TextInput} placeholder="Confirm password" placeholderTextColor={'#79796E'}
            onFocus={()=>setFieldTouched('verifyPassword')}
            onBlur={()=>setFieldTouched('verifyPassword')}
            value={values.verifyPassword}
            onChangeText={handleChange('verifyPassword')}
            autoCapitalize='none'
            secureTextEntry={!isVerifyPasswordVisible}/>
            <TouchableOpacity 
              style={styles.visibilityButton} 
              onPress={() => togglePasswordVisibility('verifyPassword')}>
             <FontAwesomeIcon icon={isVerifyPasswordVisible ? faEye : faEyeSlash} size={20} color="black" />
            </TouchableOpacity>
            </View>
            {touched.verifyPassword && errors.verifyPassword && (
              <Text style={styles.errorMessage}>{errors.verifyPassword}</Text>
            )}
        </View>
        <View style={styles.btnWrapper}>
          <ReusableButton 

          btnText='Reset Password'
          textColor={COLORS.white} 
          backgroundColor={COLORS.primary}
          borderWidth={1}
          width={height*0.4}
          borderColor={COLORS.primary}
          size={16}
          paddingHorizantal={10}
          paddingVertical={10}
          onPress={() => handleSubmit()}
          />
    </View>
    </>
    )}
    </Formik>
      </View>
    </View>
  )
}

export default CreateNewPassword

const styles = StyleSheet.create({
    container:{
    
        justifyContent: 'center',
        alignItems: 'center',
        padding:20,
        paddingTop:height * 0.001,
        
      },
    textBox:{
      
      marginVertical: 30,
       
      },
      labelContainer: {
        backgroundColor: "white", // Same color as background
        alignSelf: "flex-start", // Have View be same width as Text inside
        paddingHorizontal: 3, // Amount of spacing between border and first/last letter
        marginStart: 10, // How far right do you want the label to start
        zIndex: 1, // Label must overlap border
        elevation: 1, // Needed for android
        shadowColor: "white", // Same as background color because elevation: 1 creates a shadow that we don't want
        position: "absolute", // Needed to be able to precisely overlap label with border
        top: -10, // Vertical position of label. Eyeball it to see where label intersects border.
    },
    inputContainer: {
        borderWidth: 1, // Create border
        borderRadius: 4,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0, // Not needed. Just make it look nicer.
        padding: 8, // Also used to make it look nicer
        zIndex: 0, // Ensure border has z-index of 0
        
    },
    TextInput:{
      width:width * 0.8,
      height:height * 0.04,
      backgroundColor:'white',
      
      padding:10,
      marginBottom:10,
    },
    btnWrapper:{
      marginTop:height * 0.04,
    },
    errorMessage:{
      fontFamily:'Poppins',
      color:'#201A1B',
      fontSize:12,
      paddingHorizontal:10,
      paddingVertical:5,
      textAlign:'justify',
      lineHeight:16,
      
    },
    visibilityButton: {
      padding: 10,
      position: 'absolute',
      right: 0,
    },

})