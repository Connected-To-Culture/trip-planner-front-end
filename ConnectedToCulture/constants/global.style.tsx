import { StyleSheet,ViewStyle } from "react-native";
import { create } from "react-test-renderer";
import COLORS from '../constants/theme'


const commonText = {
    fontWeight: 'bold',
    lineHeight: '120%',
    letterSpacing: 0,
    paddingBottom: 0
};

const globalStyles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.white
       
    },
       
    heading1: {
        fontSize: 32,
        ...commonText
    },
    heading2: {
        fontSize: 24,
        ...commonText
    },
    heading3: {
        fontSize: 20,
        ...commonText
    },
    heading4: {
        fontSize: 16,
        ...commonText
    },
    regular: {
        fontSize: 16,
        ...commonText
    },
    small: {
        fontSize: 12,
        ...commonText
    },
    fullWidthBtnBlack:{
        width:'90%',
        height:'auto',
        top:10,
        gap:10,
        paddingTop: 15,
        paddingBottom:15,
        paddingLeft: 10,
        paddingRight: 10,
        marginHorizontal:20,
        backgroundColor:COLORS.black,
        borderRadius:5,
               
   },
  
});
const rowWithSpace = (justifyContent: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'): ViewStyle=>({
    
    flexDirection: "row",
    alignItems: "center",
    justifyContent: justifyContent,
});

export default {globalStyles,rowWithSpace};