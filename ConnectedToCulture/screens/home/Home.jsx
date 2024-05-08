import React from 'react';
import { View, Text, FlatList } from 'react-native';
import homeStyles from './home.style';
import globalStylesAndRowWithSpace from '../../constants/global.style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CountriesToExplore, HeightSpacer, NoTripPlan, Recommendations } from '../../components';

const Home = ({ navigation }) => {
  const { globalStyles, rowWithSpace } = globalStylesAndRowWithSpace;

  // Dummy data for FlatList
  const data = [
    { id: '1', type: 'NoTripPlan' },
    { id: '2', type: 'CountriesToExplore' },
    { id: '3', type: 'Recommendations' },
    // Add more data items as needed
  ];

  // Render item function for FlatList
  const renderItem = ({ item }) => {
    switch(item.type) {
      case 'NoTripPlan':
        return (
          <>
            <NoTripPlan navigation={navigation} />
            <HeightSpacer height={20} />
          </>
        );
      case 'CountriesToExplore':
        return (
          <>
            <CountriesToExplore navigation={navigation} />
            <HeightSpacer height={20} />
          </>
        );
      case 'Recommendations':
        return (
          <>
            <Recommendations navigation={navigation} />
            <HeightSpacer height={20} />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={homeStyles.container}>
        <View style={[rowWithSpace('space-between'), homeStyles.header]}>
          <Text style={homeStyles.headerText}>Hi, MK</Text>
        </View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

export default Home;
