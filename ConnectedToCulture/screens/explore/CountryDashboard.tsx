import { View, Text } from 'react-native'
import React from 'react'
import { GoBack } from '../../components'

const CountryDashboard = ({navigation}: {navigation: any}) => {
  return (
    <View>
      <GoBack navigation={navigation} title='Country'/>
      <Text>CountryDashboard</Text>
    </View>
  )
}

export default CountryDashboard