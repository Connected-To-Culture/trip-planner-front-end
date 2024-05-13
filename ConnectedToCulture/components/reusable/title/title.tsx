import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'


type TitleType = {
    navigation: {
      navigate: (screenName: string) => void;
    };
    handleClick: () => void;
    name: string;
    secondname: string;
  };

const Title: React.FC<TitleType> = ({ handleClick, name, secondname}) => {
  return (
    <View style={styles.midContainer}>
    <Text style={styles.expText}>
      {name}
    </Text>
    <TouchableOpacity onPress={handleClick} >
      <Text style={styles.txtMore}>
        {secondname}
      </Text>
    </TouchableOpacity>
  </View>
  )
}


const styles = StyleSheet.create({
    midContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        paddingHorizontal: 16,
      },
      expText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        right: 12
      },
      txtMore: {
        fontSize: 20,
        color: 'black',
      },
})
export default Title