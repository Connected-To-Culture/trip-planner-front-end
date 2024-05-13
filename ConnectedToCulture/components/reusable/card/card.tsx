import React from 'react';
import { View, Text, Image, StyleSheet, StyleProp, ViewStyle, TextStyle, ImageStyle } from 'react-native';

interface CardProps {
  title: string;
  imageUrl: any;
  style?: StyleProp<ViewStyle>; 
  imageStyle?: StyleProp<ImageStyle>; 
  titleStyle?: StyleProp<TextStyle>; 
}

const Card: React.FC<CardProps> = ({ title, imageUrl, style, imageStyle, titleStyle }) => {
  if (!imageUrl) {
    return null; 
  }
  return (
    <View style={[styles.card, style]}>
      <Image source={imageUrl} style={[styles.image, imageStyle]} />
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    padding: 16,
    alignItems: 'center',
    width: 120,
    height: 150,
    marginTop: 20,
    fontFamily: 'Almarai',
  },
  image: {
    borderRadius: 6,
  },
  title: {
    marginTop: 10,
    fontSize: 16,
    alignItems: 'center',
    textAlign: 'center',
  },
});

export default Card;
