import {StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import React from 'react'

export default StyleSheet.create({

})

export const screenOptions={
    headerShown:false,
    tabBarLabelStyle:{
        fontSize:14
    },

    tabBarActiveTintColor:'red',
    
}
export const homeScreenOptions={
    tabBarLabel:"Explore",
    tabBarIcon:({color,size}:any)=>(
        <Icon name="search" color={color} size={20}/>
    ),
}
export const saveScreenOptions={
    tabBarIcon:({color,size}:any)=>(
        <Icon name="heart" color={color} size={20}/>
    ),
}
export const tripScreenOptions={
    tabBarIcon:({color,size}:any)=>(
        <Icon name='fighter-jet' color={color} size={20}/>
    ),
}
export const inboxScreenOptions={
    tabBarIcon:({color,size}:any)=>(
        <Icon name="inbox" color={color} size={20}/>
    ),
}
export const profileScreenOptions={
    tabBarIcon:({color,size}:any)=>(
        <Icon name="github-alt" color={color} size={20}/>
    ),
}