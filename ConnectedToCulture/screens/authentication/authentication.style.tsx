import { StyleSheet, TextStyle, ViewStyle, ImageStyle, Dimensions, ImageBackground } from 'react-native';
import COLORS from '../../constants/theme';

// Get the dimensions of the screen
const windowHeight = Dimensions.get('window').height;

interface Style {
    container: ViewStyle;
    background: ViewStyle;
    commonText: TextStyle;
    createAccountText: TextStyle;
    inputWrapper: ViewStyle & TextStyle; // If you're applying text styles directly to inputs, which is unusual
    wrapper: ViewStyle;
    buttonWrapper: ViewStyle;
    buttonText: TextStyle;
    errorMessage: TextStyle;
    logoContainer: ViewStyle;
    logo: ImageStyle;
    loginBtns: ViewStyle;
    checkboxContainer: ViewStyle;
    checkbox: ViewStyle; // CheckBox style might be more specific depending on the library used
    label: TextStyle;
    linkText: TextStyle;
    newAccountText: ViewStyle;
    welcomeContainer: ViewStyle;
  }


const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        backgroundColor: 'rgba(0, 0, 0,0.3)',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(254, 246, 217, 0.5)', // #FEF6D9 with 50% opacity

    },
    container: {
        flex: 1,
        padding: 20,
        paddingTop: windowHeight * 0.01,
        justifyContent: 'center',
    },
 
    commonText: {
        fontFamily: 'Almarai',
        fontSize: 14,
        fontWeight: '600',
        lineHeight: 16,
        color: '#022435',
        textAlign:'center',
       
      },
    commonTextSignIn: {
        fontFamily: 'Almarai',
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 16,
        color:COLORS.dark,
        textAlign:'center',
    },
    createAccountText: {
        fontFamily: 'Almarai', // Make sure this font is properly linked in your React Native project
        fontWeight: '400',
        lineHeight: 16,
        color: COLORS.dark,
        paddingTop: 20,
        fontSize: 32,
        textAlign: 'center',
        justifyContent: 'center',
    },
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
        color: 'black',
        
        // Text styles moved to TextInput component
    },
    visibilityButton: {
        padding: 10,
        position: 'absolute',
        right: 0,
      },
    wrapper: {
        position: 'relative',
        marginBottom: windowHeight * 0.015,
    },
    btnWrapper: {
        position: 'relative',
        marginBottom: windowHeight * 0.015,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    createButton:{
        width:'60%',
        height:'auto',
        top:10,
        gap:10,
        paddingTop: 15,
        paddingBottom:15,
        paddingLeft: 10,
        paddingRight: 10,
        marginHorizontal:windowHeight * 0.1,
        marginBottom: windowHeight * 0.01,
        marginTop: windowHeight * 0.01,
        backgroundColor:COLORS.primaryDark,
        borderRadius:5,
        justifyContent: 'center',
        alignItems: 'center',
    },
   
    buttonText: {
        fontFamily: 'Almarai', // Make sure this font is properly linked in your React Native project
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 16,        
        color: "#FFFFFF",
        textAlign: 'center',
    },
    errorMessage: {
        fontFamily: 'Almarai', // Make sure this font is properly linked in your React Native project
        fontWeight: '400',
        lineHeight: 12,
        color: 'red',
        fontSize: 14,
        marginLeft: 5,
        textAlign: 'right',
        paddingTop: 10,
    },
    logoContainer: {
        width: '100%',
        height: windowHeight * 0.3, // Adjusted to use relative height
        paddingTop: windowHeight * 0.02,
        marginBottom: windowHeight * 0.001,
    },
    logo: {
        width: '100%', // Adjust to fill the container width
        height: '100%', // Adjust to fill the container height
        resizeMode: 'contain',
        
    },
      
    checkboxContainer: {
        flexDirection: 'row',
        alignSelf: 'center', // Adjusted for alignment
    },
    checkbox: {
        alignSelf: 'center',
    },
 
    linkText: {
        fontFamily: 'Almarai', // Make sure this font is properly linked in your React Native project
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 16,
        color: COLORS.dark,
        textDecorationLine: 'underline',
        textDecorationColor: COLORS.dark,
    },
  //welcome page
  greetingsContainer: {
    alignItems: 'center',
    marginBottom: windowHeight * 0.03,
  },
  greetingText: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 5,
    color: COLORS.primaryDark
  },

  //Terms and Conditions - Reset Password
  box:{
    backgroundColor:COLORS.white,
    width:40,
    height:40,
    borderRadius:12,
    alignItems:'center',
    justifyContent:'center'
},
textBox:{
    marginHorizontal:20,
    marginVertical:10
  },
  inputWrapperRstPassword: {
    borderColor: '#D4D4D4',
    backgroundColor: COLORS.white,
    borderWidth: 1,
    height: 50,
    borderRadius: 5,
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 5,
    justifyContent: 'center',
    // Text styles moved to TextInput component
},
textEmail: {
    marginBottom:0}


});

export default styles;
