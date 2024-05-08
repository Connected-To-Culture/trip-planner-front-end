import { View, Text, Dimensions,Image, FlatList } from 'react-native'
import React from 'react'
import styles from './home.style'
import HeightSpacer from '../reusable/HeightSpacer'
import globalStylesAndRowWithSpace from '../../constants/global.style';
import recommendations,{RecommendationItem} from '../../assets/data/recomendationsData';
import WidthSpacer from '../reusable/WidthSpacer';
import COLORS from '../../constants/theme';
import { ReusableButton } from '..';
import { useNavigation } from '@react-navigation/native'
import { Home } from '../../screens';

const { width, height } = Dimensions.get("window");
const { rowWithSpace } = globalStylesAndRowWithSpace;
const Recommendations = () => {
  const navigation=useNavigation();
  const renderItem = ({ item, index,navigation }:{item:RecommendationItem,index:number,navigation:any}) => 
    (
      <View style={styles.recomendationCard}>
      <View style={styles.recomendationCardImage}>
        <Image source={item.image} 
        style={styles.recommendatinsImage}/>
      </View>
      <View style={styles.recomendationCardInfoContainer}>
        <View style={rowWithSpace('flex-start')}>
          <Text style={[styles.recomendationCardText,styles.rating]}>{item.rating.toFixed(1)}</Text>
          <Text style={[styles.recomendationCardText,{color:COLORS.black400}]}>{item.reviewNumber}</Text>
        </View>
        <View style={rowWithSpace('space-between')}>
          <Text style={styles.Text}>{item.title}</Text>
          <WidthSpacer width={width*0.45} />
          <Text style={styles.Text}>${item.price}</Text>
        </View>
        <View style={[rowWithSpace('space-between')]}>
          <Text style={[styles.recomendationCardText,{color:COLORS.black400}]}>{item.location}</Text>
          <WidthSpacer width={width*0.59} />
          <Text style={[styles.recomendationCardText,{color:COLORS.black400}]}>${item.totalPrice} total</Text>
        </View>
        <View style={[rowWithSpace('space-between')]}>
          <Text style={[styles.recomendationCardText]}>{item.description}</Text>
        </View>
        <View style={[rowWithSpace('flex-end'),{marginLeft:width*0.8,marginBottom:width*0.3}]}>
       
        <View style={styles.ButtonContainer}>
          <ReusableButton
              btnText='Save'
              backgroundColor={COLORS.white}
              textColor={COLORS.primary}
              size={14}
              borderColor={COLORS.primary}
              borderWidth={1}
              width={width*0.15}
              paddingHorizantal={5}
              paddingVertical={5}
              onPress={()=>navigation.navigate('Welcome')}
          />
        </View>
        <View style={[styles.ButtonContainer]}>
          <ReusableButton
              btnText='Select'
              backgroundColor={COLORS.primary}
              textColor={COLORS.white}
              size={14}
              borderColor={COLORS.primary}
              borderWidth={1}
              width={width*0.2}
              paddingHorizantal={5}
              paddingVertical={5}
              onPress={()=>{}}
    
          />
        </View>
        </View>
        
      </View>
        </View>
    )
    
  return (
    <View style={styles.CompanentContainer}>
    <View style={styles.TextContainer}>
      <Text style={styles.Text}>Recomended</Text>
    </View>
   <HeightSpacer height={height*0.01} />
  <FlatList 
    
    data={recommendations}
    renderItem={(props) => renderItem({ ...props, navigation })}
    
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{padding:width*0.01}}
    
    />
    </View>
    

    
   
   
  )
}

export default Recommendations