import { View, Text, TextInput, TouchableOpacity,Image, Alert, Dimensions, ImageBackground } from 'react-native'
import React from 'react'
import globalStylesAndRowWithSpace from '../../constants/global.style';
import styles from './authentication.style';
import COLORS from '../../constants/theme';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { FormikValues, FormikHelpers } from 'formik';
import { LoginButtons } from '../../components';

// Get the dimensions of the screen
const windowHeight = Dimensions.get('window').height;

interface FormModel{
    userName:string,
    email:string,
    phone:string,
    zipCode:string,
    password:string,
    verifyPassword:string,
}
const validationSchema=Yup.object().shape({
    userName:Yup.string()
    .min(3,"Username must be 3 chracters")
    .required('Required'),
    email:Yup.string()
    .email('Provide a valid email')
    .required('Required'),
    phone:Yup.string()
    .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Phone number is not valid')
    .required('Required'),
    zipCode:Yup.string()
    .required()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(5, 'Must be exactly 5 digits')
    .max(5, 'Must be exactly 5 digits'),
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
  
const { globalStyles, rowWithSpace } = globalStylesAndRowWithSpace;

const CreateAccount = ({navigation}: {navigation: any}) => {
    const handleSubmit =  (values: FormModel, { resetForm, setSubmitting }: FormikHelpers<FormModel>) => {
       
          Alert.alert('Form Submitted', JSON.stringify(values, null, 2));
          resetForm();
          setSubmitting(false);
        
      };
    
  return (
    <ImageBackground
    source={require('../../assets/images/country/ghana/yoel-winkler-zCAh6tOWFt8-unsplash.jpg')}
    style={styles.background}>
    <View style={[styles.container,styles.overlay]}>
        
        <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../../assets/images/logos/c2c.png')}/>
        </View>  
        <View style={styles.wrapper}>
            <Text style={styles.createAccountText}>Create Account</Text>
        </View>
    <Formik<FormModel>
        initialValues={{
            userName:'',
            email:'',
            phone:'',
            zipCode:'',
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
        <View style={styles.wrapper}>
        
            
                <TextInput style={styles.inputWrapper} placeholder='Username' placeholderTextColor={'#79796E'}
                onFocus={()=>setFieldTouched('userName')}
                onBlur={()=>setFieldTouched('userName')}
                value={values.userName}
                onChangeText={handleChange('userName')}
                autoCapitalize='none'
                autoCorrect={false}
                />
           
            {touched.userName && errors.userName && (
                <Text style={styles.errorMessage}>{errors.userName}</Text>
                )}
        </View>
        <View style={styles.wrapper}>
    
        <TextInput style={styles.inputWrapper} placeholder='Email' placeholderTextColor={'#79796E'}
            onFocus={()=>setFieldTouched('email')}
            onBlur={()=>setFieldTouched('email',true)}
            value={values.email}
            onChangeText={handleChange('email')}
            autoCapitalize='none'
            autoCorrect={false}/>    
        
        {touched.email && errors.email && (
              <Text style={styles.errorMessage}>{errors.email}</Text>
            )}
        </View>

        <View style={styles.wrapper}>
    
        <TextInput style={styles.inputWrapper} placeholder='Phone Number' placeholderTextColor={'#79796E'}
            onFocus={()=>setFieldTouched('phone')}
            onBlur={()=>setFieldTouched('phone',true)}
            value={values.phone}
            onChangeText={handleChange('phone')}
            autoCapitalize='none'
            autoCorrect={false}/>    
        
        {touched.phone && errors.phone && (
              <Text style={styles.errorMessage}>{errors.phone}</Text>
            )}
        </View>

        <View style={styles.wrapper}>
    
        <TextInput style={styles.inputWrapper} placeholder='Home Zip Code' placeholderTextColor={'#79796E'}
            onFocus={()=>setFieldTouched('zipCode')}
            onBlur={()=>setFieldTouched('zipCode',true)}
            value={values.zipCode}
            onChangeText={handleChange('zipCode')}
            autoCapitalize='none'
            autoCorrect={false}/>    
        
        {touched.zipCode && errors.zipCode && (
              <Text style={styles.errorMessage}>{errors.zipCode}</Text>
            )}
        </View>
        
        
            <View style={styles.wrapper}>
                <TextInput style={styles.inputWrapper} placeholder='Password' placeholderTextColor={'#79796E'}
                onFocus={()=>setFieldTouched('password')}
                onBlur={()=>setFieldTouched('password')}
                value={values.password}
                onChangeText={handleChange('password')}
                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry/>
            
            {touched.password && errors.password && (
                <Text style={styles.errorMessage}>{errors.password}</Text>
                )}
        </View>
        
    
        <View style={styles.wrapper}>
            <TextInput style={styles.inputWrapper} placeholder='Verify Password' placeholderTextColor={'#79796E'}
            onFocus={()=>setFieldTouched('verifyPassword')}
            onBlur={()=>setFieldTouched('verifyPassword')}
            value={values.verifyPassword}
            onChangeText={handleChange('verifyPassword')}
            autoCapitalize='none'
            secureTextEntry/>
       
        {touched.verifyPassword && errors.verifyPassword && (
              <Text style={styles.errorMessage}>{errors.verifyPassword}</Text>
            )}
        </View>
        
        <View style={styles.wrapper}>
            <TouchableOpacity
            style={styles.createButton}
            onPress={() => handleSubmit()} >
                <Text style={[styles.buttonText]} >Create New Account</Text>
            </TouchableOpacity>
    </View>
    </>
    )}
  </Formik>
  <View style={styles.wrapper}>
      <Text style={styles.commonText}>By Creating An Account You Agree To Our</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('TermsAndConditions')}>
      <Text style={[styles.linkText,styles.commonText]}>Terms And Conditions</Text>
      </TouchableOpacity>
    </View>
    <View >
    <Text style={styles.commonText}>Or Sign In As</Text>
    </View>
       <LoginButtons/>
  </View>
  </ImageBackground>
  )
}

export default CreateAccount