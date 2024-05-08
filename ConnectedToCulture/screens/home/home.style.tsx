import { ScrollView, StyleSheet} from "react-native";
import COLORS from "../../constants/theme";
import { Dimensions } from "react-native";


const { width, height } = Dimensions.get("window");

const homeStyles=StyleSheet.create({
  
    container: {
        
        backgroundColor:COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
        padding:15,
        paddingTop:0,
        paddingBottom:height*0.05,
        
    },
    header:{
        width:'100%',
        height:'auto',
        backgroundColor:COLORS.white,
        marginTop:0
        
    },
    headerText:{
        fontSize:32,
        color:COLORS.primaryDark,
        fontWeight:'700',
        textAlign:'center',
        lineHeight:38.4,
        fontFamily:'Almarai'
    },
    avatar:{
        width:50,
        height:50,
        borderRadius:50,
       
    },
    components:{
        width:'100%',
        height:height*0.8,
        backgroundColor:COLORS.white,
       
    }
});

export default homeStyles;