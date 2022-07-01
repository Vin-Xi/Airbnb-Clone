import React from 'react';
import {
  useColorScheme,
} from 'react-native';
import TabNavigator from './src/Components/TabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'
import store from './src/redux/store';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <NavigationContainer>
      <Provider store={store}>
      <TabNavigator/>
      </Provider>
    </NavigationContainer>
    </GestureHandlerRootView>
  )
}


export default App;
