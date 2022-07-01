import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../Screens/Home'
import SavedScreen from '../../Screens/Saved';
import CreateListScreen from '../../Screens/CreateList/createListScreen';

import { 
    homeScreenOptions,
    saveScreenOptions,
    screenOptions,
    tripScreenOptions,
    inboxScreenOptions,
    profileScreenOptions
} from './styles';

export type rootTabNavigator={
  Home:undefined;
  Saved:undefined;
  Trips:undefined;
  Inbox:undefined;
  Profile:undefined;
}
const Tab = createBottomTabNavigator<rootTabNavigator>();


function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Home" options={homeScreenOptions} component={HomeScreen} />
      <Tab.Screen name="Saved" options={saveScreenOptions} component={SavedScreen}/>
      <Tab.Screen name="Trips" options={tripScreenOptions} component={CreateListScreen}/>
      <Tab.Screen name="Inbox"  options={inboxScreenOptions} component={SavedScreen}/>
      <Tab.Screen name="Profile"  options={profileScreenOptions} component={SavedScreen}/>
      
    </Tab.Navigator>
  );
}

export default TabNavigator