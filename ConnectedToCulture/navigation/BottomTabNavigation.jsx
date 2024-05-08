import { View, Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {Home,Profile,Plan,Explore} from '../screens';
import { Recommendations } from '../components';
import { Welcome } from '../screens';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons/faHome';
import {faMap} from '@fortawesome/free-solid-svg-icons';
import {faGlobe} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import COLORS from '../constants/theme';
const Tab=createBottomTabNavigator();

const tabBarStyle={
    padding:10,
    borderRadius:0,
    height:60,
    position:"absolute",
    bottom:0,
    left:0,
    right:0
}
const BottomTabNavigation = () => {
  return (
   
        <Tab.Navigator 
            initialRouteName='Welcome'
            activeColor='#eb6a58'
            tabBarHideKeyboard={true}
            headerShown={false}
            inactiveColor='#3e2465'
            barStyle={{paddingBottom:48}}
        >
           
            <Tab.Screen 
                name="Home"
                component={Home}
                options={
                    {
                        tabBarStyle:tabBarStyle,
                        tabBarShowLabel:false,
                        headerShown:false,
                        tabBarIcon:({focused})=> (
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <FontAwesomeIcon 
                                size={24} 
                                icon={faHome} 
                                color={focused ? COLORS.primary : COLORS.black} 
                            />
                            <Text style={{ color: focused ? COLORS.primary : COLORS.black }}>Home</Text>
                        </View>
                        )
                    }
                }
            
            />
           
            <Tab.Screen 
                name="Explore"
                component={Explore}
                options={
                    {
                        tabBarStyle:tabBarStyle,
                        tabBarShowLabel:false,
                        headerShown:false,
                        tabBarIcon:({focused})=> (
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <FontAwesomeIcon size={24} icon={faMap} 
                            color={focused ? COLORS.primary:COLORS.black}/> 
                            <Text style={{ color: focused ? COLORS.primary : COLORS.black }}>Explore</Text>  
                            </View>
                        )
                    }
                }
            
            />
            <Tab.Screen 
                name="Plan"
                component={Plan}
                options={
                    {
                        tabBarStyle:tabBarStyle,
                        tabBarShowLabel:false,
                        headerShown:false,
                        tabBarIcon:({focused})=> (
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <FontAwesomeIcon size={24} icon={faGlobe}
                            color={focused ? COLORS.primary:COLORS.black} />  
                            <Text style={{ color: focused ? COLORS.primary : COLORS.black }}>Plan</Text>
                            </View>
                        )
                    }
                }
            
            />
             <Tab.Screen 
                name="Profile"
                component={Profile}
                options={
                    {
                        tabBarStyle:tabBarStyle,
                        tabBarShowLabel:false,
                        headerShown:false,
                        tabBarIcon:({focused})=> (
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <FontAwesomeIcon size={24} icon={faUser}
                            color={focused ? COLORS.primary:COLORS.black}/> 
                            <Text style={{ color: focused ? COLORS.primary : COLORS.black }}>Profile</Text>
                            </View>
                        )
                    }
                }
            
            />
        </Tab.Navigator>
  )
}

export default BottomTabNavigation