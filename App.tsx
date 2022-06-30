import React from 'react';
import {
  useColorScheme,
} from 'react-native';
import TabNavigator from './src/Components/TabNavigator';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <NavigationContainer>
      <TabNavigator/>
    </NavigationContainer>
  )
}


export default App;
