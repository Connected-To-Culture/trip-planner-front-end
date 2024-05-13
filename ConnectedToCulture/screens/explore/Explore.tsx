import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

interface SlideItem {
  id: number | string;
  country: string;
  image: any;
}

type ExploreCountryProps = {
  navigation: {
    navigate: (screenName: string) => void;
  };
};

const slides: SlideItem[] = [
  {
    id: 1,
    country: 'South Africa',
    image: require('../../assets/images/country/southAfrica/sa.jpg'),
  },
  {
    id: 2,
    country: 'Ghana',
    image: require('../../assets/images/country/ghana/yoel-winkler-zCAh6tOWFt8-unsplash.jpg'),
  },
  {
    id: 3,
    country: 'Tanzania',
    image: require('../../assets/images/country/tanzania/zanzibar.jpg'),
  },
  {
    id: 4,
    country: 'South Africa',
    image: require('../../assets/images/country/southAfrica/sa.jpg'),
  },
  {
    id: 5,
    country: 'Ghana',
    image: require('../../assets/images/country/ghana/yoel-winkler-zCAh6tOWFt8-unsplash.jpg'),
  },
  {
    id: 6,
    country: 'Tanzania',
    image: require('../../assets/images/country/tanzania/zanzibar.jpg'),
  },
];

const Explore: React.FC<ExploreCountryProps> = ({ navigation }) => {
  const handleExplore = (country: string) => {
    // console.log(`Explore ${country}`);
    navigation.navigate('explore-country');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={{ textAlign: 'center', fontFamily: 'Almarai', fontSize: 26, fontWeight: 'bold', color: 'black', marginBottom: 20 }}>Explore South Africa</Text>
      <View style={styles.row}>
        {slides.map(({ id, country, image }) => (
          <View style={styles.slideItem} key={id}>
            <Text style={styles.country}>{country}</Text>
            <Text style={styles.subtitle}>3 saved places</Text>
            <Image source={image} style={styles.image} />
            <TouchableOpacity style={styles.exploreButton} onPress={() => handleExplore(country)}>
              <Text style={styles.buttonText}>Explore</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    color: 'black',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  slideItem: {
    width: '48%',
    marginBottom: 20,
  },
  country: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingBottom: 9,
  },
  image: {
    width: '100%',
    height: 179,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  exploreButton: {
    backgroundColor: '#0E7070',
    padding: 10,
    borderRadius: 10,
    width: '70%',
    alignItems: 'center',
    top: 5,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Almarai',
  },
});

export default Explore;
