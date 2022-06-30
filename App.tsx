

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import CategoriesContainer from './src/Containers/CategoriesContainer';
import HomeScreen from './src/Screens/Home/homeScreen';
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <HomeScreen/>
  )
}


export default App;
