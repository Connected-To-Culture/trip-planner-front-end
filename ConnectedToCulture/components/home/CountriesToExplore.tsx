import { View, Text, Image, FlatList, VirtualizedList } from 'react-native'
import React, { useState } from 'react'
import styles from './home.style'

import { Dimensions } from "react-native";
import HeightSpacer from '../reusable/HeightSpacer';
import { Recommendations, ReusableButton } from '..';
import COLORS from '../../constants/theme';
import { NavigationProp, RouteProp } from '@react-navigation/native';
const { width, height } = Dimensions.get("window");
interface SlideItem {
    id: number| string;
    title: string;
    image: any; 
  }

interface Props {
   
    navigation: NavigationProp<any>; // Use NavigationProp
    
  }
    
  
  const slides:SlideItem[]= [
    { 
      id:1,
      title: 'South Africa',
      image: require('../../assets/images/country/southAfrica/sa.jpg'),
    },
    {
      id:2,
      title: 'Ghana',
      image:require('../../assets/images/country/ghana/yoel-winkler-zCAh6tOWFt8-unsplash.jpg'),
    },
    {
      id:3,
      title: 'Ethiopia',
      image: require('../../assets/images/country/ethiopia/ethiopia.png'),
   },
   { 
    id:4,
    title: 'Zambia',
    image: require('../../assets/images/country/zambia/zambia.png'),
  },
  {
    id:5,
    title: 'Togo',
    image:require('../../assets/images/country/togo/togo.png'),
  },
  {
    id:6,
    title: 'Nigeria',
    image: require('../../assets/images/country/nigeria/nigeria.png'),
 },
  ];

  // renderItem fonction
  const renderItem = ({ item, index, navigation }: { item: SlideItem; index: number; navigation: NavigationProp<any> }) => {
    return (
      <View style={styles.card}>
        <Image source={item.image} style={styles.cardImage} />
        <Text style={styles.noTripPlanText}>{item.title}</Text>
        <View style={styles.ButtonContainer}>
          <ReusableButton
            btnText='Explore'
            backgroundColor={COLORS.primary}
            textColor={COLORS.white}
            size={14}
            borderColor={COLORS.primary}
            borderWidth={1}
            width={width * 0.25}
            paddingHorizantal={15}
            paddingVertical={5}
            onPress={() => navigation.navigate('CountryDashboard')}
          />
        </View>
      </View>
    );
  };
  const pagination = (activeIndex: number) => (
    <View style={{alignItems:'center'}}>
  <View style={styles.pagination}>
   {slides.map((item, index) => (
      <View key={index} style={[styles.paginationDot, index === activeIndex && styles.paginationDotActive]} />
    ))}
  </View>
  </View>
);

const CountriesToExplore :React.FC<Props> = ({navigation})  => {
  
const [activeIndex, setActiveIndex] = useState(0);
  return (
    <View style={styles.CompanentContainer}>
    <View style={styles.TextContainer}>
      <Text style={styles.Text}>Countries To Explore</Text>
    </View>
   <HeightSpacer height={height*0.01} />
   <FlatList
        data={slides}
        renderItem={(props) => renderItem({ ...props, navigation })}
        keyExtractor={(item:SlideItem) => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
       
        onScroll={(event) => {
          const { contentOffset } = event.nativeEvent;
          const index = Math.round(contentOffset.x / width);
          setActiveIndex(index);
        }}
      />
      {pagination(activeIndex)}
    </View>
  )
}

export default CountriesToExplore