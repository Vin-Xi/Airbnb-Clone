import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../Screens/Home'
import SavedScreen from '../../Screens/Saved';
import { 
    homeScreenOptions,
    saveScreenOptions,
    screenOptions,
    tripScreenOptions,
    inboxScreenOptions,
    profileScreenOptions
} from './styles';
const Tab = createBottomTabNavigator();


function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Home" options={homeScreenOptions} component={HomeScreen} />
      <Tab.Screen name="Saved" options={saveScreenOptions} component={SavedScreen}/>
      <Tab.Screen name="Trips" options={tripScreenOptions} component={SavedScreen}/>
      <Tab.Screen name="Inbox"  options={inboxScreenOptions} component={SavedScreen}/>
      <Tab.Screen name="Profile"  options={profileScreenOptions} component={SavedScreen}/>
      
    </Tab.Navigator>
  );
}

export default TabNavigator