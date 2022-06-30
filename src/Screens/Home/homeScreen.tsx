import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import CategoriesContainer from '../../Containers/CategoriesContainer';
import ListingsContainer from '../../Containers/ListingsContainer';
import styles from './styles';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <CategoriesContainer />
        <ListingsContainer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
