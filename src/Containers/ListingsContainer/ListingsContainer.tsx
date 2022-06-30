import React from 'react';
import {View, FlatList,Text} from 'react-native';
import styles from './styles';
import Alllistings from '../../data/listings';
import Lister from '../../Components/Lister';

const ListingsContainer = () => {
  return (
    <View style={styles.container}>
      {Alllistings.map((item: any, index) => {
        return (
          <View key={index} style={styles.CardContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <FlatList
              horizontal
              keyExtractor={li => li.id.toString()}
              data={item.listings}
              renderItem={({item}: any) => {
                return <Lister listing={item} />;
              }}
              style={styles.list}
              
            />
          </View>
        );
      })}
    </View>
  );
};

export default ListingsContainer;
