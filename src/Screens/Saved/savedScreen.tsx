import React from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import {useSelector} from 'react-redux';
import {saved} from '../../redux/selectors/savedSelector';
import SavedList from '../../Components/SavedList';
import styles from './styles';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {rootTabNavigator} from '../../Components/TabNavigator/tabNavigator';

type Props = BottomTabScreenProps<rootTabNavigator, 'Saved'>;

const SavedScreen: React.FC<{navigation: Props['navigation']}> = ({
  navigation,
}) => {
  const savedListings = useSelector(saved);
  const isSaved = savedListings.length !== 0;
  const handlePress = () => navigation.navigate('Home');
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Saved List </Text>
      {isSaved ? (
        <FlatList
          keyExtractor={item => item.id.toString()}
          data={savedListings}
          renderItem={({item}) => <SavedList listing={item} />}
        />
      ) : (
        <View style={styles.container}>
          <Text style={styles.content}>
            Not everyday is filled with adventures, but you can start by
            planning the next one. Tap the heart on any home to start saving
            your favourites here.
          </Text>
          <View style={styles.footer}>
            <TouchableHighlight style={styles.button} onPress={handlePress}>
              <Text style={styles.text}>Find Homes</Text>
            </TouchableHighlight>
          </View>
        </View>
      )}
    </View>
  );
};
export default SavedScreen;
