import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Title from '../../../components/reusable/title/title';
import Card from '../../../components/reusable/card/card';

type MoreExploreProps = {
  navigation: {
    navigate: (screenName: string) => void;
  };
};

interface Outdoor {
  id: number;
  title: string;
  image: any;
}

const Outdooradventures: Outdoor[] = [
  {
    id: 1,
    title: 'Hiking',
    image: require('../../../assets/images/backgrounds/Travel.png'),
  },
  {
    id: 2,
    title: 'Cycling',
    image: require('../../../assets/images/backgrounds/House.png'),
  },
  {
    id: 3,
    title: 'Water sports',
    image: require('../../../assets/images/backgrounds/Binocular.png'),
  },
]

const familyActivites: Outdoor[] = [
  {
    id: 1,
    title: 'Amusement',
    image: require('../../../assets/images/backgrounds/Travel.png'),
  },
  {
    id: 2,
    title: 'Theatre performance',
    image: require('../../../assets/images/backgrounds/House.png'),
  },
  {
    id: 3,
    title: 'Zoo and aquarium',
    image: require('../../../assets/images/backgrounds/Binocular.png'),
  },
]

const foodTour: Outdoor[] = [
  {
    id: 1,
    title: 'Wine or beer tasting',
    image: require('../../../assets/images/backgrounds/Travel.png'),
  },
  {
    id: 2,
    title: 'Culinary walking tour',
    image: require('../../../assets/images/backgrounds/House.png'),
  },
  {
    id: 3,
    title: 'Street food markets',
    image: require('../../../assets/images/backgrounds/Binocular.png'),
  },
]


const MoreExplore: React.FC<MoreExploreProps> = ({navigation}) => {
  return (
    <View>
      <View style={styles.menuContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.iconContainer}>
            <AntDesign name='left' style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.countryName}>South Africa</Text>
        </View>
        <Title name='Outdoor adventures' />
        <View style={styles.cardReusable}>
        {Outdooradventures.map((index) => (
          <View key={index.id}>
           <Card title={index.title} imageUrl={index.image} style={styles.fixing} />
          </View>
        ))}
        </View>
        <Title name='Family friendly activities' />
        <View style={styles.cardReusable}>
        {familyActivites.map((index) => (
          <View key={index.id}>
           <Card title={index.title} imageUrl={index.image} style={styles.fixingtwo} imageStyle={styles.imagefixing}/>
          </View>
        ))}
        </View>
        <Title name='Food and drink tours' />
        <View style={styles.cardReusable}>
        {foodTour.map((index) => (
          <View key={index.id}>
           <Card title={index.title} imageUrl={index.image}  imageStyle={styles.imagefixing}/>
          </View>
        ))}
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 12,
    right: 60,
    marginTop: 15,
  },
  iconContainer: {
    padding: 8,
  },
  icon: {
    fontSize: 24,
    color: 'black',
  },
  countryName: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  cardReusable: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 13,
    marginRight: 13
  },
  fixing: {
    height: 120
  },
  fixingtwo: {
    height: 140
  },
  imagefixing: {
    marginTop: 12
  }
})

export default MoreExplore