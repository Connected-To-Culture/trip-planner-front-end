import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { GoBack } from '../../components'

const Explore = ({navigation}:{navigation:any}) => {
  return (
    <View>
      <GoBack navigation={navigation} title='Explore'/>
      <TouchableOpacity onPress={()=>  navigation.navigate('CountryDashboard')}>
        <Text>Explore</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Explore