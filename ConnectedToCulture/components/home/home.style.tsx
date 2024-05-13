import { StyleSheet } from "react-native"
import COLORS from '../../constants/theme'
import { Dimensions } from'react-native'
import { StyleProp, ViewStyle, TextStyle, ImageStyle } from 'react-native';




// Get the dimensions of the screen
const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    CompanentContainer:{
        
        backgroundColor: COLORS.white,
        alignItems: 'flex-start',
        justifyContent: 'center',
        minHeight: height * 0.2,
                    
    },
    NoTripCompanentContainer:{
        
        backgroundColor: COLORS.white,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: height * 0.2,
        
       
    },
    TextContainer:{
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
              
    },
    imageContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        width:width*0.35,
        height:height*0.1,
    },
    noTripPlanText:{
        fontSize:20,
        color:COLORS.black,
        fontWeight:'700',
        textAlign:'center',
        lineHeight:24,
        fontFamily:'Almarai'
    },
    Text:{
        fontSize:24,
        color:COLORS.primaryDark,
        fontWeight:'700',
        textAlign:'left',
        lineHeight:28.8,
        fontFamily:'Almarai',
    },
    ButtonContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 3,
        
    },
  
    PlanCard:{
        backgroundColor: COLORS.white,
        borderRadius: 10,
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
        padding:width*0.03,
        paddingBottom:width*0.02,
        marginBottom: width*0.05,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    PlanCardInfo:{
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'baseline',
          
       
    },
    PlanCardInfoText:{
        fontFamily:'Almarai',
        fontSize:16,
        lineHeight:19.2,
        color:COLORS.black,
        fontWeight:'400',
        textAlign:'left',
    },

    
    PlanCardImage:{
        width: 90,
        height: 90,
        borderRadius: 0,
        marginRight:width*0.01
    },
   

    //Contries To Explore
    card:{
        width:width*0.45,
        height:height*0.25,
        backgroundColor: COLORS.white,
        borderRadius: 5,
        shadowColor: COLORS.black,
        shadowOffset: {
            width: -2,
            height: -2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
        
        padding:width*0.02,
        gap:width*0.01,
        marginRight:width*0.05,
        marginBottom: width*0.05,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardImage:{
        width:'100%',
        height: height*0.15,
        borderRadius: 3,
        
        marginBottom:width*0.02
    },

    pagination: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        alignContent: 'center',
      },
      paginationDot: {
        width: 7,
        height: 7,
        borderRadius: 4,
        backgroundColor: '#ccc',
        marginHorizontal: 5,
      },
      paginationDotActive: {
        backgroundColor: COLORS.primary, // Change color for active dot
      },

      //Recomendations
      recomendationCard:{
        width:'100%',
        height:height*0.32,
        backgroundColor: COLORS.white,
        borderRadius: 15,
        shadowColor: COLORS.black,
        shadowOffset: {
            width: -2,
            height: -2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
        paddingTop:0,
        paddingVertical:0,
        paddingBottom:width*0.2,
        marginBottom: width*0.05,
        gap:20,
      
        
        
    },
    recomendationCardImage:{
        width:'100%',
        height: height*0.15,
        borderRadius: 15,
        padding:0,
        top:0,
        marginBottom:0
    },
    recommendatinsImage:{
        width:'100%',
        height:'100%',
        resizeMode:'cover',
        borderTopLeftRadius:15,
        borderTopRightRadius:15
    },
    recomendationCardInfoContainer:{
        flexDirection: 'column',
        justifyContent:'space-between',
        alignItems: 'baseline',
        margin:10,
        marginTop:-10
         
    },
    rating:{
        backgroundColor:COLORS.primaryLight,
        padding:width*0.005,
        paddingHorizontal:width*0.02,
        marginRight:width*0.01,
    }, 
    recomendationCardText:{
        fontFamily:'Almarai',
        fontSize:12,
        lineHeight:14.4,
        color:COLORS.black,
        fontWeight:'400',
        paddingBottom:width*0.01
        
    },
    
    contentContainerFlatListStyle: {
        
        height: "100%",
      },
   

})

export default styles; 