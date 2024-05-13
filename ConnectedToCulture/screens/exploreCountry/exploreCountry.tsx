import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Card from '../../components/reusable/card/card';
import { Recommendations } from '../../components';
import Title from '../../components/reusable/title/title';

type ExploreCountryProps = {
  navigation: {
    navigate: (screenName: string) => void;
  };
};

interface PostData {
  id: number;
  title: string;
  postImage: any;
}

const postData: PostData[] = [
  {
    id: 1,
    title: 'Outdoor adventures',
    postImage: require('../../assets/images/backgrounds/Travel.png'),
  },
  {
    id: 2,
    title: 'Family friendly activities',
    postImage: require('../../assets/images/backgrounds/Travel.png'),
  },
  {
    id: 3,
    title: 'Food and drink tours',
    postImage: require('../../assets/images/backgrounds/Travel.png'),
  },
];




const ExploreCountry: React.FC<ExploreCountryProps> = ({ navigation }) => {

  const clickHandler = () => {
    navigation.navigate('more-explore');
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.menuContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.iconContainer}>
            <AntDesign name='left' style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.countryName}>South Africa</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Country Information</Text>
          <View style={styles.content}>
            <View style={styles.menu}>
              <Text style={styles.menuItem}><FontAwesome name="money" style={styles.menuIcon} /> Currency</Text>
              <Text style={styles.menuItem}><FontAwesome name="language" style={styles.menuIcon} /> Language</Text>
              <Text style={styles.menuItem}><FontAwesome name="globe" style={styles.menuIcon} /> Timezone</Text>
              <Text style={styles.menuItem}><FontAwesome name="money" style={styles.menuIcon} /> Average trip price</Text>
              <Text style={styles.menuItem}><FontAwesome name="plane" style={styles.menuIcon} /> Flight time</Text>
            </View>
            <Image
              source={require('../../assets/images/country/southAfrica/sa.jpg')}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
        </View>
        <View>
          <Title name={"Explore experiences"} secondname={"More"} handleClick={clickHandler} />
        </View>


        <View style={styles.cardReusable}>
          {postData?.map((item) => (
            <Card key={item?.id} title={item?.title} imageUrl={item?.postImage.toString()} />
          ))}
        </View>
        <View style={styles.recommended}>
          <Recommendations />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 16,
    fontFamily: 'Almarai',
    backgroundColor: '#FFFFFF',
  },
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
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
    marginTop: 20,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'black'
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  menu: {
    marginRight: 16,
  },
  menuItem: {
    fontSize: 16,
    color: 'black',
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    marginRight: 8,
    fontSize: 16,
    color: 'black',
  },
  image: {
    width: 180,
    height: 150,
    borderRadius: 8,
    top: 18
  },
  // midContainer: {
  //   display: 'flex',
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  //   marginTop: 20,
  //   paddingHorizontal: 16,
  // },
  // expText: {
  //   fontSize: 20,
  //   fontWeight: 'bold',
  //   color: 'black',
  //   right: 12
  // },
  // txtMore: {
  //   fontSize: 20,
  //   color: 'black',
  // },
  cardReusable: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  recommended: {
    marginTop: 26,
    backgroundColor: 'white',
  }
});

export default ExploreCountry;
